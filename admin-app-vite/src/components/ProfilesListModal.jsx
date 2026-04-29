import React, { useEffect } from "react";
import ProfileListItem from "./ProfileListItem";
import { FaTimes } from "react-icons/fa";

const ProfilesListModal = ({ isOpen, title, profiles, onClose }) => {
  console.log("Modal received props:", { isOpen, title, profilesCount: profiles?.length });

  useEffect(() => {
    if (isOpen) {
      console.log("Modal should be open");
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          console.log("ESC pressed - closing modal");
          onClose();
        }
      };
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    console.log("Modal is closed, returning null");
    return null;
  }

  console.log("Rendering modal with profiles:", profiles);

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-header-content">
            <h2>{title || "Profiles"}</h2>
            <p className="modal-subtitle">
              {profiles?.length || 0} {profiles?.length === 1 ? 'Profile' : 'Profiles'} Found
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          {!profiles || profiles.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <p>No profiles available</p>
              <p className="empty-subtext">Check back later for updates</p>
            </div>
          ) : (
            <div className="profiles-rows-list">
              {profiles.map((profile, index) => (
                <ProfileListItem key={profile.id} profile={profile} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilesListModal;