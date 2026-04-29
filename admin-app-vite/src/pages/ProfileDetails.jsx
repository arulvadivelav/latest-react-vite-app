// src/pages/ProfileDetails.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUserPlus,
  FaBan,
  FaArrowLeft,
} from "react-icons/fa";

import allProfiles from "../mock/profiles";
import {
  basicInfoFields,
  professionalFields,
  horoscopeFields,
} from "../configs/profileFields";

import "../styles/ProfileDetails.css";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = allProfiles.find(
    (item) => Number(item.id) === Number(id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!profile) {
    return <div className="not-found">Profile Not Found</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === profile.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? profile.images.length - 1 : prev - 1
    );
  };

  const getValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  const renderSection = (title, fields) => (
    <div className="info-section">
      <h2>{title}</h2>

      {fields.map((field, index) => (
        <div className="detail-row" key={index}>
          <span>{field.label}</span>
          <p>{getValue(profile, field.key) || "-"}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="profile-page">
      <div className="profile-wrapper">

        {/* TOP SECTION */}
        <div className="profile-top">

          {/* PHOTO */}
          <div className="profile-gallery">
            <div className="photo-slider">
              <button onClick={prevImage} className="nav-btn left">◀</button>
          <img src={profile.images[currentIndex]} alt={profile.name} className="main-photo"/>
          <button onClick={prevImage} className="nav-btn right">▶</button>

            </div>
          </div>

          {/* INFO */}
          <div className="profile-head-info">
            <span className="profile-id">
              ID: {profile.id}
            </span>

            <h1>{profile.name}</h1>

            <p>
              {profile.age} Years • {profile.location.city}
            </p>

            <p>{profile.profession}</p>

            {/* ACTION ICONS */}
            <div className="icon-actions">

              <button title="Shortlist">
                <FaHeart />
              </button>

              <button title="Send Request">
                <FaUserPlus />
              </button>

              <button title="Block">
                <FaBan />
              </button>

              <button
                title="Back"
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft />
              </button>

            </div>
          </div>
        </div>

        {/* DETAILS */}
        {renderSection("Basic Information", basicInfoFields)}

        {renderSection(
          "Professional Details",
          professionalFields
        )}

        {renderSection(
          "Horoscope Details",
          horoscopeFields
        )}

      </div>
    </div>
  );
};

export default ProfileDetails;