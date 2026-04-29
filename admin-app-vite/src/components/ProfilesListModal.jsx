import React from "react";
import { FaTimes, FaEye } from "react-icons/fa";

const ProfileListModal = ({
  isOpen,
  onClose,
  title = "Profiles List",
  subtitle = "View all matched profiles",
  profiles = [],
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      {/* Overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal */}
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <h2>{title}</h2>
            <p className="modal-subtitle">{subtitle}</p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {profiles.length > 0 ? (
            <div className="profiles-rows-list">
              {profiles.map((item, index) => (
                <div
                  key={item.id}
                  className={`profile-row-item ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  {/* Image */}
                  <div className="profile-row-avatar">
                    <img
                      src={item.images || "/default-profile.png"}
                      alt={item.name}
                    />
                  </div>

                  {/* Info */}
                  <div className="profile-row-info">
                    <h4 className="profile-row-name">{item.name}</h4>
                    <span className="profile-row-id">ID: {item.id}</span>
                  </div>

                  {/* Action */}
                  <div className="profile-row-actions">
                    <button
                      className="btn-view-row"
                      onClick={() =>
                        window.location.href = `/profile/${item.id}`
                      }
                    >
                      <FaEye />
                      <span>View Profile</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">💖</div>
              <p>No profiles found</p>
              <span className="empty-subtext">
                New profiles will appear here soon.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileListModal;