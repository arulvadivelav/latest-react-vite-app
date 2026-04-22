import React from "react";
import RangeSlider from "./RangeSlider";

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
}) => {
  const renderField = () => {
    if (type === "select") {
      return (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="input-field"
        >
          <option value="">{placeholder || "Select"}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === "checkbox") {
      return (
        <div className="checkbox-group">
          <div className="checkbox-options">
            {options.map((opt) => {
              const val = opt.toLowerCase().replace(/ /g, "_");
              return (
                <label key={val} className="checkbox-option">
                  <input
                    type="checkbox"
                    name={name}
                    value={val}
                    checked={(value || []).includes(val)}
                    onChange={onChange}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </div>
      );
    }

    if (type === "range-double") {
        return (
            <RangeSlider
                min={min}
                max={max}
                value={value || [min, max]}
                onChange={onChange}
                name={name}
            />
        );
    }

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    );
  };

  return (
    <div className="input-group">
      <label>{label || placeholder}</label>
      {renderField()}
    </div>
  );
};

export default FormField;
