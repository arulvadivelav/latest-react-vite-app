import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import {
  CircularProgress,
  Snackbar,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  Container,
  Typography,
  IconButton
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle
} from "@mui/icons-material";

import BasicDetails from "../../components/register/BasicDetails";
import HoroscopeDetails from "../../components/register/HoroscopeDetails";
import FamilyDetails from "../../components/register/FamilyDetails";
import PhotoUpload from "../../components/register/PhotoUpload";

import {
  getCastes,
  getSubCastes,
  getCities,
  getEducations,
  getOccupations,
  submitProfile
} from "../../services/registerService";

import "../../styles/Register.css";

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const [dropdowns, setDropdowns] = useState({
    castes: [],
    subCastes: [],
    educations: [],
    occupations: [],
    cities: []
  });

  const location = useLocation();
  
  const {
    email_id,
    phone,
    password
  } = location.state || {};

  const [form, setForm] = useState({
    email_id: email_id,
    phone_number: phone,
    password: password,
    profile_created_for: "",
    first_name: "",
    last_name: "",
    gender: "",
    marital_status: "",
    dob: "",
    time_of_birth: "",
    place_of_birth: "",
    religion: "",
    caste: "",
    sub_caste: "",
    mother_tongue: "",
    height: "",
    weight: "",
    education: "",
    occupation: "",
    annual_income: "",
    current_city: "",
    about_me: "",
    rasi: "",
    nakshatra: "",
    nakshatra_pada: "",
    lagnam: "",
    dosham: false,
    dosham_details: "",
    father_name: "",
    father_occupation: "",
    mother_name: "",
    mother_occupation: "",
    siblings_count: "",
    family_type: "",
    family_status: "",
    photos: []
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { label: "Basic Details", description: "Personal information" },
    { label: "Horoscope", description: "Astrological details" },
    { label: "Family", description: "Family background" },
    { label: "Photos", description: "Upload your photos" }
  ];

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (form.caste) {
      fetchSubCastes(form.caste);
    }
  }, [form.caste]);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [casteRes, educationRes, occupationRes, cityRes] = await Promise.all([
        getCastes(),
        getEducations(),
        getOccupations(),
        getCities()
      ]);

      setDropdowns({
        castes: casteRes?.data || [],
        subCastes: [],
        educations: educationRes?.data || [],
        occupations: occupationRes?.data || [],
        cities: cityRes?.data || []
      });
    } catch (error) {
      console.error("Error loading initial data:", error);
      setSnackbar({
        open: true,
        message: "Failed to load form data",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchSubCastes = async (casteId) => {
    try {
      const response = await getSubCastes(casteId);
      setDropdowns((prev) => ({
        ...prev,
        subCastes: response?.data || []
      }));
    } catch (error) {
      console.error("Error loading sub-castes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhotoUpload = (files) => {
    setForm((prev) => ({
      ...prev,
      photos: files
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      if (!form.profile_created_for) newErrors.profile_created_for = "Profile Created for";
      if (!form.first_name) newErrors.first_name = "First name is required";
      if (!form.gender) newErrors.gender = "Gender is required";
      if (!form.marital_status) newErrors.marital_status = "Marital status is required";
      if (!form.dob) newErrors.dob = "Date of birth is required";
      
      // Age validation (minimum 18 years)
      if (form.dob) {
        const birthDate = new Date(form.dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < 18) newErrors.dob = "You must be at least 18 years old";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Append all form fields
      Object.keys(form).forEach((key) => {
        if (key === "photos") {
          form.photos.forEach((photo, index) => {
            formData.append(`photos`, photo);
          });
        } else if (form[key] !== null && form[key] !== "") {
          formData.append(key, form[key]);
        }
      });
      
      const response = await submitProfile(formData);
      
      // Handle 200 success
      if (response.status_code === 200 || response.status_code === 201) {
        setSnackbar({
          open: true,
          message: response.data?.message || "Profile submitted successfully!",
          severity: "success"
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          window.location.href = "/profiles";
        }, 2000);
      } else if (response.status_code === 400) {
        setSnackbar({
          open: true,
          message: response.data?.message.dob,
          severity: "failed"
        });
      } else if (response.status_code === 500) {
        setSnackbar({
          open: true,
          message: response.data?.message,
          severity: "failed"
        });
      }
      
    } catch (error) {
      console.error("Submission error:", error);
      
      if (error.response) {
        const { status_code, data } = error.response;
        
        if (status_code === 400) {
          // Handle 400 Bad Request - Validation errors
          const errorMessage = data?.message || "Validation failed. Please check your inputs.";
          setSnackbar({
            open: true,
            message: errorMessage,
            severity: "warning"
          });
          
          // Set field-specific errors if available
          if (data?.message && typeof data.message === 'object') {
            setErrors(data.message);
          }
          
        } else if (status === 500) {
          // Handle 500 Internal Server Error
          setSnackbar({
            open: true,
            message: data?.message || "Server error. Please try again later.",
            severity: "error"
          });
          
        } else {
          // Handle all other status codes (401, 403, 404, etc.)
          setSnackbar({
            open: true,
            message: data?.message || "An error occurred. Please try again.",
            severity: "error"
          });
        }
        
      } else if (error.request) {
        // Network error - no response received
        setSnackbar({
          open: true,
          message: "Network error. Please check your internet connection.",
          severity: "error"
        });
        
      } else {
        // Request setup error
        setSnackbar({
          open: true,
          message: error.message || "An error occurred. Please try again.",
          severity: "error"
        });
      }
      
    } finally {
      setIsSubmitting(false);
    }
  };
  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <BasicDetails
            form={form}
            errors={errors}
            handleChange={handleChange}
            dropdowns={dropdowns}
          />
        );
      case 1:
        return (
          <HoroscopeDetails
            form={form}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <FamilyDetails
            form={form}
            handleChange={handleChange}
            dropdowns={dropdowns}
          />
        );
      case 3:
        return (
          <PhotoUpload
            photos={form.photos}
            handlePhotoUpload={handlePhotoUpload}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        
        {/* Sidebar with Stepper */}
        {/* <div className="register-sidebar">
          <div className="sidebar-header">
            <h3>Create Profile</h3>
            <p>Find your perfect match</p>
          </div>
          
          <div className="step-list">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`step-item ${activeStep === index ? "step-active" : ""} ${
                  activeStep > index ? "step-done" : ""
                }`}
                onClick={() => activeStep > index && setActiveStep(index)}
                disabled={activeStep < index}
              >
                <div className="step-number">
                  {activeStep > index ? <CheckCircle /> : index + 1}
                </div>
                <div className="step-text">
                  <span className="step-label">{step.label}</span>
                  <span className="step-desc">{step.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div> */}

        {/* Main Content */}
        <div className="register-content">
          <div className="register-scrollable">
            <div className="content-header">
              <h2 className="content-title">{steps[activeStep].label}</h2>
              <p className="content-subtitle">{steps[activeStep].description}</p>
            </div>
            
            {loading ? (
              <div className="loading-container">
                <CircularProgress sx={{ color: "#db2777" }} />
              </div>
            ) : (
              <div className="form-section">{getStepContent()}</div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="button-group">
            {activeStep > 0 && (
              <button className="btn-back" onClick={handleBack}>
                <ChevronLeft /> Back
              </button>
            )}
            
            {activeStep < steps.length - 1 ? (
              <button className="btn-next" onClick={handleNext}>
                Next <ChevronRight />
              </button>
            ) : (
              <button
                className="btn-next"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  "Submit Profile"
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegisterPage;