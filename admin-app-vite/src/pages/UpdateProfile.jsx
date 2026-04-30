import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/UpdateProfile.css";

// Options data
const religions = ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Parsi", "Jewish"];
const maritalStatuses = ["Never Married", "Divorced", "Widowed", "Separated"];
const genders = ["Male", "Female", "Other"];
const states = ["Tamil Nadu", "Karnataka", "Maharashtra", "Delhi", "Gujarat", "West Bengal", "Uttar Pradesh", "Rajasthan"];
const cities = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Delhi: ["New Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
};
const occupations = ["Doctor", "Engineer", "Teacher", "Business", "IT Professional", "Lawyer", "Government Job", "Student", "Other"];
const educations = ["High School", "Bachelor's Degree", "Master's Degree", "PhD", "Diploma", "Other"];
const incomeRanges = ["Below 3 LPA", "3-6 LPA", "6-10 LPA", "10-15 LPA", "15-25 LPA", "Above 25 LPA"];
const motherTongues = ["Hindi", "English", "Tamil", "Kannada", "Telugu", "Malayalam", "Marathi", "Gujarati", "Bengali", "Punjabi"];

const UpdateProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Original data (saved state)
  const [formData, setFormData] = useState({
    firstName: "Priya",
    lastName: "Sharma",
    dateOfBirth: "1998-05-15",
    gender: "Female",
    maritalStatus: "Never Married",
    religion: "Hindu",
    subcaste: "Brahmin",
    email: "priya@gmail.com",
    phone: "9876543210",
    state: "Tamil Nadu",
    city: "Chennai",
    occupation: "Doctor",
    education: "Master's Degree",
    annualIncome: "15-25 LPA",
    motherTongue: "Hindi",
    about: "Simple and caring person who values family traditions. Looking for a life partner who is understanding and supportive.",
    images: [],
    mainImageIndex: 0,
    showEmail: true,
    showPhone: true,
  });

  // Temporary data for editing
  const [tempData, setTempData] = useState(formData);
  const [showImageModal, setShowImageModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setTempData(formData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempData(formData);
    setShowImageModal(false);
    setIsEditing(false);
  };

  const handleSave = () => {
    setFormData(tempData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const currentImages = [...tempData.images];
    
    const remainingSlots = 3 - currentImages.length;
    const newImages = files.slice(0, remainingSlots);
    
    newImages.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setTempData(prev => ({
            ...prev,
            images: [...prev.images, reader.result]
          }));
        };
        reader.readAsDataURL(file);
      }
    });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (indexToRemove) => {
    setTempData(prev => {
      const newImages = prev.images.filter((_, idx) => idx !== indexToRemove);
      let newMainIndex = prev.mainImageIndex;
      
      if (indexToRemove === prev.mainImageIndex) {
        newMainIndex = 0;
      } else if (indexToRemove < prev.mainImageIndex) {
        newMainIndex = prev.mainImageIndex - 1;
      }
      
      return {
        ...prev,
        images: newImages,
        mainImageIndex: newMainIndex >= newImages.length ? 0 : newMainIndex
      };
    });
  };

  const setMainImage = (index) => {
    setTempData(prev => ({
      ...prev,
      mainImageIndex: index
    }));
  };

  // Determine which data to display (editing or saved)
  const displayData = isEditing ? tempData : formData;

  return (
    <div className="update-profile-container">
      <div className="profile-card">
        <form onSubmit={(e) => e.preventDefault()} className="profile-form">
          {/* Image Upload Section */}
            <div className="image-upload-section">

            <div className="profile-image-wrapper">
                {displayData.images.length > 0 ? (
                <img
                    src={displayData.images[displayData.mainImageIndex]}
                    alt="Profile"
                    className="main-profile-image"
                />
                ) : (
                <div className="profile-image-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9b8e7c" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                )}

                {isEditing && (
                <button
                    type="button"
                    className="upload-image-btn"
                    onClick={() => setShowImageModal(true)}
                >
                    Upload Photos
                </button>
                )}
            </div>

            <p className="image-hint">Upload up to 3 photos</p>

            {/* Buttons Section */}
            <div className="button-group">
                {!isEditing ? (
                <button className="edit-profile-btn" onClick={handleEdit}>
                    Edit Profile
                </button>
                ) : (
                <>
                    <button className="save-btn" onClick={handleSave}>
                    Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                    Cancel
                    </button>
                </>
                )}
            </div>

            </div>
          {/* Personal Information */}
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME <span className="required">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={displayData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="form-group">
                <label>LAST NAME <span className="required">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={displayData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>DATE OF BIRTH <span className="required">*</span></label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={displayData.dateOfBirth}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="form-group">
                <label>GENDER <span className="required">*</span></label>
                <select name="gender" value={displayData.gender} onChange={handleChange} disabled={!isEditing} required>
                  <option value="">Select Gender</option>
                  {genders.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>MARITAL STATUS <span className="required">*</span></label>
                <select name="maritalStatus" value={displayData.maritalStatus} onChange={handleChange} disabled={!isEditing} required>
                  <option value="">Select Marital Status</option>
                  {maritalStatuses.map(ms => <option key={ms}>{ms}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>MOTHER TONGUE</label>
                <select name="motherTongue" value={displayData.motherTongue} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select Mother Tongue</option>
                  {motherTongues.map(mt => <option key={mt}>{mt}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Religious Information */}
          <div className="form-section">
            <h2>Religious Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>RELIGION <span className="required">*</span></label>
                <select name="religion" value={displayData.religion} onChange={handleChange} disabled={!isEditing} required>
                  <option value="">Select Religion</option>
                  {religions.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>SUBCASTE</label>
                <input
                  type="text"
                  name="subcaste"
                  value={displayData.subcaste}
                  onChange={handleChange}
                  placeholder="Enter subcaste"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="form-section">
            <h2>Location</h2>
            <div className="form-row">
              <div className="form-group">
                <label>STATE</label>
                <select name="state" value={displayData.state} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>CITY</label>
                <select name="city" value={displayData.city} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select City</option>
                  {cities[displayData.state]?.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="form-section">
            <h2>Professional Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>OCCUPATION</label>
                <select name="occupation" value={displayData.occupation} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select Occupation</option>
                  {occupations.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>EDUCATION</label>
                <select name="education" value={displayData.education} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select Education</option>
                  {educations.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>ANNUAL INCOME</label>
                <select name="annualIncome" value={displayData.annualIncome} onChange={handleChange} disabled={!isEditing}>
                  <option value="">Select Annual Income</option>
                  {incomeRanges.map(i => <option key={i}>{i}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>EMAIL <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={displayData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={displayData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  disabled={!isEditing}
                  required
                />
              </div>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="showEmail"
                  checked={displayData.showEmail}
                  onChange={handleCheckboxChange}
                  disabled={!isEditing}
                />
                Show Email on profile
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="showPhone"
                  checked={displayData.showPhone}
                  onChange={handleCheckboxChange}
                  disabled={!isEditing}
                />
                Show Phone Number on profile
              </label>
            </div>
          </div>

          {/* About Section */}
          <div className="form-section">
            <h2>About Me</h2>
            <div className="form-group full-width">
              <textarea
                name="about"
                value={displayData.about}
                onChange={handleChange}
                placeholder="Write about yourself, your interests, values, and what you're looking for in a partner..."
                rows={5}
                disabled={!isEditing}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="modal-overlay" onClick={() => setShowImageModal(false)}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Upload Photos</h3>
                <button className="close-modal" onClick={() => setShowImageModal(false)}>
                    <FaTimes />
                </button>
            </div>
            
            <div className="modal-body">
              <button 
                className="add-photo-btn"
                onClick={() => fileInputRef.current?.click()}
                disabled={tempData.images.length >= 3}
              >
                + Add Photo ({tempData.images.length}/3)
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                multiple
                style={{ display: 'none' }}
              />
              <p className="upload-limit">Maximum 3 photos allowed. Click on any photo to set as main profile picture.</p>
              
              <div className="image-gallery">
                {tempData.images.map((img, idx) => (
                  <div key={idx} className={`gallery-item ${tempData.mainImageIndex === idx ? 'main-image' : ''}`}>
                    <img src={img} alt={`Upload ${idx + 1}`} onClick={() => setMainImage(idx)} />
                    <div className="image-actions">
                      <button 
                        className={`set-main-btn ${tempData.mainImageIndex === idx ? 'active' : ''}`}
                        onClick={() => setMainImage(idx)}
                      >
                        {tempData.mainImageIndex === idx ? 'Main Photo' : 'Set as Main'}
                      </button>
                      <button 
                        className="remove-image-btn"
                        onClick={() => removeImage(idx)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;