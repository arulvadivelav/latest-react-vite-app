// SearchSection.jsx
import React, { useState, useEffect, useRef } from "react";
import FormField from "./FormField";
import FilterConfig from "../configs/FilterFields.js";
import { cityOptions, stateOptions } from "../configs/LocationData";
import { countProfiles } from "../mock/profiles";

const SearchSection = ({ onSearch, onClear }) => {
  const initialState = FilterConfig.reduce((acc, field) => {
    acc[field.name] = field.default ?? "";
    return acc;
  }, {});

  const [filters, setFilters] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [liveCount, setLiveCount] = useState(null);
  const debounceRef = useRef(null);

  // Update live count whenever filters change (with debounce)
  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const payload = buildApiPayload(filters);
      const hasAnyFilter = Object.keys(payload).length > 0;
      if (hasAnyFilter) {
        setLiveCount(countProfiles(payload));
      } else {
        setLiveCount(null);
      }
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updated = { ...filters, [name]: value };
    if (name === "state") updated.city = "";
    setFilters(updated);
  };

  const validate = () => {
    let newErrors = {};
    FilterConfig.forEach((field) => {
      if (field.validate) {
        const error = field.validate(filters[field.name]);
        if (error) newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildApiPayload = (filtersToUse = filters) => {
    let payload = {};
    FilterConfig.forEach((field) => {
      const value = filtersToUse[field.name];
      if (value === "" || value === null || value === undefined) return;

      if (Array.isArray(field.apiKey)) {
        payload[field.apiKey[0]] = value[0];
        payload[field.apiKey[1]] = value[1];
      } else if (field.apiKey.includes(".")) {
        const keys = field.apiKey.split(".");
        let current = payload;
        keys.forEach((key, index) => {
          if (index === keys.length - 1) {
            current[key] = value;
          } else {
            current[key] = current[key] || {};
            current = current[key];
          }
        });
      } else {
        payload[field.apiKey] = value;
      }
    });
    return payload;
  };

  const handleSearch = () => {
    if (!validate()) return;
    const apiPayload = buildApiPayload();
    onSearch(apiPayload);
  };

  const handleClear = () => {
    setFilters(initialState);
    setErrors({});
    setLiveCount(null);
    onClear();
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Find Your Perfect Partner</h2>
        <p className="search-subtitle">Use the filters below to discover your ideal match</p>
      </div>

      <div className="search-grid">
        {FilterConfig.map((field) => {
          let options = field.options || [];

          if (field.name === "state") {
            options = stateOptions[filters.country] || [];
          }

          if (field.name === "city") {
            options = cityOptions[filters.state] || [];
          }

          return (
            <div key={field.name} className={`field-wrapper ${field.size || "small"}`}>
              <FormField
                {...field}
                options={options}
                value={filters[field.name]}
                onChange={handleChange}
              />
              {errors[field.name] && (
                <p className="error">{errors[field.name]}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="search-actions">
        {liveCount !== null && (
          <div className="live-count-badge">
            <span className="live-dot" />
            <span>
              <strong>{liveCount}</strong> profile{liveCount !== 1 ? "s" : ""} match your filters
            </span>
          </div>
        )}

        <div className="search-clear-btn">
          <button className="clear-btn" onClick={handleClear}>
            Clear Filters
          </button>
          <button className="search-btn" onClick={handleSearch}>
            Search Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;