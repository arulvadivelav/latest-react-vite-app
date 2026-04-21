import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  ArrowForward,
  ArrowBack,
  LockOutlined,
  CheckCircle,
} from "@mui/icons-material";
import "../styles/Register.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const [form, setForm] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    subcaste: "",
    // Profile Details
    phone: "",
    occupation: "",
    interests: [],
    languages: [],
    // Preferences
    height: "",
    weight: "",
    partnerReligion: "",
    education: "",
    expectations: [],
    lifestyle: []
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { name: "Basic Info", desc: "Personal information" },
    { name: "Profile Details", desc: "Professional details" },
    { name: "Preferences", desc: "Expectations" }
  ];

  const validateStep = () => {
    const newErrors = {};
    
    if (activeStep === 0) {
      if (!form.firstName.trim()) newErrors.firstName = "First name is required";
      if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!form.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
      if (!form.gender) newErrors.gender = "Gender is required";
      if (!form.maritalStatus) newErrors.maritalStatus = "Marital status is required";
      if (!form.religion) newErrors.religion = "Religion is required";
      if (!form.subcaste) newErrors.subcaste = "Subcaste is required";
    } 
    else if (activeStep === 1) {
      if (!form.phone) newErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter valid 10-digit phone number";
      if (!form.occupation) newErrors.occupation = "Occupation is required";
    }
    else if (activeStep === 2) {
      if (!form.height) newErrors.height = "Height is required";
      else if (form.height < 100 || form.height > 250) newErrors.height = "Height must be between 100-250 cm";
      if (!form.weight) newErrors.weight = "Weight is required";
      else if (form.weight < 30 || form.weight > 200) newErrors.weight = "Weight must be between 30-200 kg";
      if (!form.education) newErrors.education = "Education is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      const currentValues = form[name] || [];
      if (checked) {
        setForm({ ...form, [name]: [...currentValues, value] });
      } else {
        setForm({ ...form, [name]: currentValues.filter(v => v !== value) });
      }
    } else {
      setForm({ ...form, [name]: value });
      if (errors[name]) {
        setErrors({ ...errors, [name]: "" });
      }
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps([...completedSteps, activeStep]);
      }
      
      if (activeStep === steps.length - 1) {
        handleSubmit();
      } else {
        setActiveStep(prev => prev + 1);
      }
    } else {
      setSnackbar({
        open: true,
        message: "Please fill all required fields correctly",
        severity: "warning"
      });
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleStepClick = (index) => {
    if (index <= activeStep || completedSteps.includes(index - 1)) {
      setActiveStep(index);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (response.ok) {
        setSnackbar({ 
          open: true, 
          message: "Registration successful! Redirecting...", 
          severity: "success" 
        });
        setTimeout(() => navigate("/home"), 2000);
      } else {
        const data = await response.json();
        setSnackbar({ 
          open: true, 
          message: data.message || "Registration failed", 
          severity: "error" 
        });
      }
    } catch {
      setSnackbar({ 
        open: true, 
        message: "Something went wrong. Please try again.", 
        severity: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Render Step 0
  const renderBasicInfo = () => (
    <div className="form-grid">
      <div className="input-group">
        <label>First Name <span className="required-star">*</span></label>
        <input
          type="text"
          name="firstName"
          className="input-field"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        {errors.firstName && <div className="field-error">{errors.firstName}</div>}
      </div>

      <div className="input-group">
        <label>Last Name <span className="required-star">*</span></label>
        <input
          type="text"
          name="lastName"
          className="input-field"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        {errors.lastName && <div className="field-error">{errors.lastName}</div>}
      </div>

      <div className="input-group">
        <label>Date of Birth <span className="required-star">*</span></label>
        <input
          type="date"
          name="dateOfBirth"
          className="input-field"
          value={form.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <div className="field-error">{errors.dateOfBirth}</div>}
      </div>

      <div className="input-group">
        <label>Gender <span className="required-star">*</span></label>
        <select name="gender" className="input-field" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="field-error">{errors.gender}</div>}
      </div>

      <div className="input-group">
        <label>Marital Status <span className="required-star">*</span></label>
        <select name="maritalStatus" className="input-field" value={form.maritalStatus} onChange={handleChange}>
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
        {errors.maritalStatus && <div className="field-error">{errors.maritalStatus}</div>}
      </div>

      <div className="input-group">
        <label>Religion <span className="required-star">*</span></label>
        <select name="religion" className="input-field" value={form.religion} onChange={handleChange}>
          <option value="">Select Religion</option>
          <option value="hindu">Hindu</option>
          <option value="christian">Christian</option>
        </select>
        {errors.religion && <div className="field-error">{errors.religion}</div>}
      </div>

      <div className="input-group form-field-full">
        <label>Subcaste <span className="required-star">*</span></label>
        <select name="subcaste" className="input-field" value={form.subcaste} onChange={handleChange}>
          <option value="">Select Subcaste</option>
          <option value="karukku_pattaiyathar">Karukku Pattaiyathar</option>
          <option value="melnattar">Melnattar</option>
          <option value="nattathi_nadar">Nattathi Nadar</option>
          <option value="kodikal_nadar">Kodikal Nadar</option>
          <option value="kalla_nadar">Kalla Nadar</option>
          <option value="gramani">Gramani</option>
          <option value="chetty_nadar">Chetty Nadar</option>
          <option value="pandya_vamsam_nadars">Pandya Vamsam Nadars</option>
          <option value="kongu_nadar">Kongu Nadar</option>
        </select>
        {errors.subcaste && <div className="field-error">{errors.subcaste}</div>}
      </div>
    </div>
  );

  // Render Step 1
  const renderProfileDetails = () => (
    <div className="form-grid">
      <div className="input-group">
        <label>Phone Number <span className="required-star">*</span></label>
        <input
          type="tel"
          name="phone"
          className="input-field"
          value={form.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
        />
        {errors.phone && <div className="field-error">{errors.phone}</div>}
      </div>

      <div className="input-group">
        <label>Occupation <span className="required-star">*</span></label>
        <select name="occupation" className="input-field" value={form.occupation} onChange={handleChange}>
          <option value="">Select Occupation</option>
          <option value="engineer">Software Engineer</option>
          <option value="doctor">Doctor</option>
          <option value="teacher">Teacher</option>
          <option value="business">Business</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
        {errors.occupation && <div className="field-error">{errors.occupation}</div>}
      </div>

      <div className="input-group form-field-full">
        <div className="checkbox-group">
          <div className="checkbox-label-main">Interests</div>
          <div className="checkbox-options">
            {["Travel", "Reading", "Movies", "Cooking", "Gaming"].map(interest => (
              <label key={interest} className="checkbox-option">
                <input
                  type="checkbox"
                  name="interests"
                  value={interest.toLowerCase()}
                  checked={form.interests.includes(interest.toLowerCase())}
                  onChange={handleChange}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="input-group form-field-full">
        <div className="checkbox-group">
          <div className="checkbox-label-main">Languages Known</div>
          <div className="checkbox-options">
            {["English", "Hindi", "Tamil", "Telugu", "Spanish"].map(lang => (
              <label key={lang} className="checkbox-option">
                <input
                  type="checkbox"
                  name="languages"
                  value={lang.toLowerCase()}
                  checked={form.languages.includes(lang.toLowerCase())}
                  onChange={handleChange}
                />
                {lang}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Render Step 2
  const renderPreferences = () => (
    <div className="form-grid">
      <div className="input-group">
        <label>Height (cm) <span className="required-star">*</span></label>
        <input
          type="number"
          name="height"
          className="input-field"
          value={form.height}
          onChange={handleChange}
          placeholder="150-200 cm"
        />
        {errors.height && <div className="field-error">{errors.height}</div>}
      </div>

      <div className="input-group">
        <label>Weight (kg) <span className="required-star">*</span></label>
        <input
          type="number"
          name="weight"
          className="input-field"
          value={form.weight}
          onChange={handleChange}
          placeholder="40-120 kg"
        />
        {errors.weight && <div className="field-error">{errors.weight}</div>}
      </div>

      <div className="input-group">
        <label>Partner's Religion Preference</label>
        <select name="partnerReligion" className="input-field" value={form.partnerReligion} onChange={handleChange}>
          <option value="">No Preference</option>
          <option value="hindu">Hindu</option>
          <option value="christian">Christian</option>
          <option value="muslim">Muslim</option>
          <option value="sikh">Sikh</option>
          <option value="buddhist">Buddhist</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="input-group">
        <label>Education <span className="required-star">*</span></label>
        <select name="education" className="input-field" value={form.education} onChange={handleChange}>
          <option value="">Select Education</option>
          <option value="highschool">High School</option>
          <option value="graduate">Bachelor's Degree</option>
          <option value="pg">Master's Degree</option>
          <option value="phd">PhD</option>
          <option value="diploma">Diploma</option>
        </select>
        {errors.education && <div className="field-error">{errors.education}</div>}
      </div>

      <div className="input-group form-field-full">
        <div className="checkbox-group">
          <div className="checkbox-label-main">Expectations from Partner</div>
          <div className="checkbox-options">
            {["Good Job", "Family Oriented", "Financial Stability", "Own House", "Car Owner"].map(exp => (
              <label key={exp} className="checkbox-option">
                <input
                  type="checkbox"
                  name="expectations"
                  value={exp.toLowerCase().replace(/ /g, '_')}
                  checked={form.expectations.includes(exp.toLowerCase().replace(/ /g, '_'))}
                  onChange={handleChange}
                />
                {exp}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="input-group form-field-full">
        <div className="checkbox-group">
          <div className="checkbox-label-main">Lifestyle Preferences</div>
          <div className="checkbox-options">
            {["Vegetarian", "Non-Vegetarian", "Vegan", "Fitness Enthusiast", "Non-Smoker"].map(life => (
              <label key={life} className="checkbox-option">
                <input
                  type="checkbox"
                  name="lifestyle"
                  value={life.toLowerCase().replace(/ /g, '_')}
                  checked={form.lifestyle.includes(life.toLowerCase().replace(/ /g, '_'))}
                  onChange={handleChange}
                />
                {life}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Main Content */}
        <div className="register-content">
          <div className="register-scrollable">
            <div className="content-header">
              <h2 className="content-title">{steps[activeStep].name}</h2>
              <p className="content-subtitle">
                {activeStep === 0 && "Let's start with your basic information"}
                {activeStep === 1 && "Tell us more about your professional background"}
                {activeStep === 2 && "Almost done! Share your preferences"}
              </p>
            </div>

            <div className="form-section">
              {activeStep === 0 && renderBasicInfo()}
              {activeStep === 1 && renderProfileDetails()}
              {activeStep === 2 && renderPreferences()}
            </div>
            <div className="button-group">
              <button
                className="btn-back"
                disabled={activeStep === 0 || loading}
                onClick={handleBack}
              >
                <ArrowBack style={{ fontSize: 18 }} />
                Back
              </button>

              <button
                className="btn-next"
                disabled={loading}
                onClick={handleNext}
              >
                {loading ? (
                  <CircularProgress size={20} style={{ color: "#fff" }} />
                ) : activeStep === steps.length - 1 ? (
                  <>
                    <LockOutlined style={{ fontSize: 18 }} />
                    Submit
                  </>
                ) : (
                  <>
                    Next
                    <ArrowForward style={{ fontSize: 18 }} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ borderRadius: "12px" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegisterPage;