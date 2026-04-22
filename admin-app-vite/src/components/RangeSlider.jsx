import React from "react";

const RangeSlider = ({ min, max, value = [min, max], onChange, name }) => {
  const [minVal, maxVal] = value;

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), maxVal - 1);
    onChange({
      target: { name, value: [newMin, maxVal] },
    });
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), minVal + 1);
    onChange({
      target: { name, value: [minVal, newMax] },
    });
  };

  return (
    <div className="range-slider">
      <div className="range-values">
        {minVal} yrs - {maxVal} yrs
      </div>

      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className="thumb thumb-left"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          className="thumb thumb-right"
        />
      </div>
    </div>
  );
};

export default RangeSlider;