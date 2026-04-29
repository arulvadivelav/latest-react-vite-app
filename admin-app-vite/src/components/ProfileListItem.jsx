import React from "react";
import { FaEye } from "react-icons/fa";

const ProfileListItem = ({ profile, index }) => {
  return (
    <div className={`profile-row-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
      {/* Profile Photo */}
      <div className="profile-row-avatar">
        <img 
          src={profile.images?.[0] || "https://via.placeholder.com/50"} 
          alt={profile.name}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/50";
          }}
        />
      </div>

      {/* Profile Info */}
      <div className="profile-row-info">
        <h4 className="profile-row-name">{profile.name}</h4>
        <span className="profile-row-id">ID: #{profile.id}</span>
      </div>

      {/* View Button */}
      <div className="profile-row-actions">
        <button 
          className="btn-view-row"
          onClick={() => window.open(`/profile/${profile.id}`, "_blank")}
        >
          <FaEye />
          <span>View Profile</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileListItem;