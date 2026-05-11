import React from "react";

const FamilyDetails = ({ form, handleChange, dropdowns }) => {
  const familyTypeOptions = [
    { value: "nuclear", label: "Nuclear" },
    { value: "joint", label: "Joint" }
  ];

  const familyStatusOptions = [
    { value: "middle", label: "Middle Class" },
    { value: "upper_middle", label: "Upper Middle Class" },
    { value: "rich", label: "Rich" },
    { value: "affluent", label: "Affluent" }
  ];

  return (
    <div className="form-grid">
      <div className="input-group">
        <label>Father's Name</label>
        <input
          type="text"
          name="father_name"
          className="input-field"
          placeholder="Enter father's name"
          value={form.father_name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Father's Occupation</label>
        <select
          name="father_occupation"
          className="input-field"
          value={form.father_occupation}
          onChange={handleChange}
        >
          <option value="">Select Occupation</option>
          {dropdowns.occupations?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Mother's Name</label>
        <input
          type="text"
          name="mother_name"
          className="input-field"
          placeholder="Enter mother's name"
          value={form.mother_name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Mother's Occupation</label>
        <select
          name="mother_occupation"
          className="input-field"
          value={form.mother_occupation}
          onChange={handleChange}
        >
          <option value="">Select Occupation</option>
          {dropdowns.occupations?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Number of Siblings</label>
        <input
          type="number"
          name="siblings_count"
          className="input-field"
          placeholder="Enter number of siblings"
          value={form.siblings_count}
          onChange={handleChange}
          min="0"
          max="20"
        />
      </div>

      <div className="input-group">
        <label>Family Type</label>
        <select
          name="family_type"
          className="input-field"
          value={form.family_type}
          onChange={handleChange}
        >
          <option value="">Select Family Type</option>
          {familyTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group form-field-full">
        <label>Family Status</label>
        <select
          name="family_status"
          className="input-field"
          value={form.family_status}
          onChange={handleChange}
        >
          <option value="">Select Family Status</option>
          {familyStatusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FamilyDetails;