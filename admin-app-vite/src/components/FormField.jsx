import React from 'react';
import SelectField from "./SelectField";
import CheckboxGroup from "./CheckboxGroup";
import RangeSlider from "./RangeSlider";

/**
 * FormField - Universal form field component
 * Delegates to specialized components to eliminate code duplication
 * 
 * Supported types: text, email, password, number, select, checkbox, range-double
 * 
 * @param {string} type - Field type (default: "text")
 * @param {string} name - Field name for form submission
 * @param {any} value - Current field value
 * @param {function} onChange - Change handler
 * @param {string} label - Field label
 * @param {string} placeholder - Placeholder text
 * @param {array} options - Options for select/checkbox fields
 * @param {number} min - Minimum value for range slider
 * @param {number} max - Maximum value for range slider
 * @param {boolean} required - Whether field is required
 */
const FormField = ({
  type = "text",
  name,
  value,
  onChange,
  label,
  placeholder,
  options = [],
  min,
  max,
  required = false,
}) => {
  // Delegate to specialized components
  if (type === "select") {
    return (
      <SelectField
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        label={label}
        required={required}
      />
    );
  }

  if (type === "checkbox") {
    const checkboxOptions = options.map((opt) => ({
      label: opt,
      value: opt.toLowerCase().replace(/ /g, "_"),
    }));

    return (
      <div className="input-group">
        <label>
          {label || placeholder}
          {required && <span className="required">*</span>}
        </label>
        <CheckboxGroup
          options={checkboxOptions}
          values={value || []}
          onChange={(newValues) =>
            onChange({ target: { name, value: newValues } })
          }
        />
      </div>
    );
  }

  if (type === "range-double") {
    return (
      <div className="input-group">
        <label>
          {label || placeholder}
          {required && <span className="required">*</span>}
        </label>
        <RangeSlider
          min={min}
          max={max}
          value={value || [min, max]}
          onChange={onChange}
          name={name}
        />
      </div>
    );
  }

  // Default text input
  return (
    <div className="input-group">
      <label>
        {label || placeholder}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default React.memo(FormField);
