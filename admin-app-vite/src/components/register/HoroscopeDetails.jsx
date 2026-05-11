import React from "react";

const HoroscopeDetails = ({ form, handleChange }) => {
  const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  const nakshatras = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha",
    "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];

  return (
    <div className="form-grid">
      <div className="input-group">
        <label>Rasi (Moon Sign)</label>
        <select
          name="rasi"
          className="input-field"
          value={form.rasi}
          onChange={handleChange}
        >
          <option value="">Select Rasi</option>
          {zodiacSigns.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Nakshatra (Birth Star)</label>
        <select
          name="nakshatra"
          className="input-field"
          value={form.nakshatra}
          onChange={handleChange}
        >
          <option value="">Select Nakshatra</option>
          {nakshatras.map((nakshatra) => (
            <option key={nakshatra} value={nakshatra}>
              {nakshatra}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Nakshatra Pada (Quarter)</label>
        <select
          name="nakshatra_pada"
          className="input-field"
          value={form.nakshatra_pada}
          onChange={handleChange}
          disabled={!form.nakshatra}
        >
          <option value="">Select Pada</option>
          <option value="1">1st Pada</option>
          <option value="2">2nd Pada</option>
          <option value="3">3rd Pada</option>
          <option value="4">4th Pada</option>
        </select>
      </div>

      <div className="input-group">
        <label>Lagnam (Ascendant)</label>
        <select
          name="lagnam"
          className="input-field"
          value={form.lagnam}
          onChange={handleChange}
        >
          <option value="">Select Lagnam</option>
          {zodiacSigns.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Sun Sign</label>
        <select
          name="sun_sign"
          className="input-field"
          value={form.sun_sign}
          onChange={handleChange}
        >
          <option value="">Select Sun Sign</option>
          {zodiacSigns.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Moon Sign</label>
        <select
          name="moon_sign"
          className="input-field"
          value={form.moon_sign}
          onChange={handleChange}
        >
          <option value="">Select Moon Sign</option>
          {zodiacSigns.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </div>

      <div className="checkbox-group form-field-full">
        <label className="checkbox-option">
          <input
            type="checkbox"
            name="dosham"
            checked={form.dosham}
            onChange={handleChange}
          />
          Has Dosham (Manglik/Kuja Dosha)
        </label>
      </div>

      {form.dosham && (
        <div className="input-group form-field-full">
          <label>Dosham Details</label>
          <textarea
            name="dosham_details"
            className="input-field"
            rows="3"
            placeholder="Please provide details about the dosham..."
            value={form.dosham_details}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default HoroscopeDetails;