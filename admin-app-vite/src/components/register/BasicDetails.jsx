import React from "react";

const BasicDetails = ({ form, errors, handleChange, dropdowns }) => {
  const profileForOptions = [
    { value: "self", label: "Myself" },
    { value: "son", label: "Son" },
    { value: "daughter", label: "Daughter" },
    { value: "sibling", label: "Sibling" },
    { value: "friend", label: "Friend" }
  ];

  const genderOptions = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "O", label: "Other" }
  ];

  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" }
  ];

  const eatingHabitOptions = [
    { value: "veg", label: "Vegetarian" },
    { value: "non-veg", label: "Non-Vegetarian" },
    { value: "eggetarian", label: "Eggetarian" }
  ];

  return (
    <div className="form-grid">
      <div className="input-group">
        <label>
          Profile Created For <span className="required-star">*</span>
        </label>
        <select
          name="profile_created_for"
          className="input-field"
          value={form.profile_created_for}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {profileForOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>
          First Name <span className="required-star">*</span>
        </label>
        <input
          type="text"
          name="first_name"
          className="input-field"
          placeholder="Enter first name"
          value={form.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <div className="field-error">{errors.first_name}</div>}
      </div>

      <div className="input-group">
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          className="input-field"
          placeholder="Enter last name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          Gender <span className="required-star">*</span>
        </label>
        <select
          name="gender"
          className="input-field"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.gender && <div className="field-error">{errors.gender}</div>}
      </div>

      <div className="input-group">
        <label>
          Marital Status <span className="required-star">*</span>
        </label>
        <select
          name="marital_status"
          className="input-field"
          value={form.marital_status}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {maritalStatusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.marital_status && <div className="field-error">{errors.marital_status}</div>}
      </div>

      <div className="input-group">
        <label>
          Date of Birth <span className="required-star">*</span>
        </label>
        <input
          type="date"
          name="dob"
          className="input-field"
          value={form.dob}
          onChange={handleChange}
        />
        {errors.dob && <div className="field-error">{errors.dob}</div>}
      </div>

      <div className="input-group">
        <label>Time of Birth</label>
        <input
          type="time"
          name="time_of_birth"
          className="input-field"
          value={form.time_of_birth}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Place of Birth</label>
        <input
          type="text"
          name="place_of_birth"
          className="input-field"
          placeholder="Enter place of birth"
          value={form.place_of_birth}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Religion</label>
        <input
          type="text"
          name="religion"
          className="input-field"
          placeholder="Enter religion"
          value={form.religion}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Caste</label>
        <select
          name="caste"
          className="input-field"
          value={form.caste}
          onChange={handleChange}
        >
          <option value="">Select Caste</option>
          {dropdowns.castes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Sub Caste</label>
        <select
          name="sub_caste"
          className="input-field"
          value={form.sub_caste}
          onChange={handleChange}
          disabled={!form.caste}
        >
          <option value="">Select Sub Caste</option>
          {dropdowns.subCastes.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Mother Tongue</label>
        <input
          type="text"
          name="mother_tongue"
          className="input-field"
          placeholder="Enter mother tongue"
          value={form.mother_tongue}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          name="height"
          className="input-field"
          placeholder="Enter height in cm"
          value={form.height}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          name="weight"
          className="input-field"
          placeholder="Enter weight in kg"
          value={form.weight}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Education</label>
        <select
          name="education"
          className="input-field"
          value={form.education}
          onChange={handleChange}
        >
          <option value="">Select Education</option>
          {dropdowns.educations.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Occupation</label>
        <select
          name="occupation"
          className="input-field"
          value={form.occupation}
          onChange={handleChange}
        >
          <option value="">Select Occupation</option>
          {dropdowns.occupations.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Annual Income (USD)</label>
        <input
          type="number"
          name="annual_income"
          className="input-field"
          placeholder="Enter annual income"
          value={form.annual_income}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Current City</label>
        <select
          name="current_city"
          className="input-field"
          value={form.current_city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          {dropdowns.cities.map((item) => (
            <option key={item.id} value={item.id}>
              {item.display_name || item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="checkbox-group form-field-full">
        <span className="checkbox-label-main">Dietary Preferences</span>
        <div className="checkbox-options">
          {eatingHabitOptions.map((option) => (
            <label key={option.value} className="checkbox-option">
              <input
                type="radio"
                name="eating_habit"
                value={option.value}
                checked={form.eating_habit === option.value}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className="checkbox-group form-field-full">
        <div className="checkbox-options">
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="smoking"
              checked={form.smoking}
              onChange={handleChange}
            />
            Smoking
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="drinking"
              checked={form.drinking}
              onChange={handleChange}
            />
            Drinking
          </label>
        </div>
      </div>

      <div className="input-group form-field-full">
        <label>About Me</label>
        <textarea
          name="about_me"
          className="input-field"
          rows="4"
          placeholder="Tell us about yourself..."
          value={form.about_me}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BasicDetails;