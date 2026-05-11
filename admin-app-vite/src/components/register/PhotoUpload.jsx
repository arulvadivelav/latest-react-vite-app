import React, { useCallback } from "react";
import { Delete, CloudUpload } from "@mui/icons-material";

const PhotoUpload = ({ photos, handlePhotoUpload }) => {
  const onDrop = useCallback((e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024
    );
    
    if (validFiles.length !== files.length) {
      alert("Some files were skipped. Please ensure all files are images under 5MB.");
    }
    
    if (validFiles.length > 0) {
      handlePhotoUpload([...photos, ...validFiles]);
    }
  }, [photos, handlePhotoUpload]);

  const removePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    handlePhotoUpload(newPhotos);
  };

  return (
    <div className="photo-upload-container">
      <div className="upload-area">
        <input
          type="file"
          id="photo-upload"
          multiple
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={onDrop}
          style={{ display: "none" }}
        />
        <label htmlFor="photo-upload" className="upload-label">
          <CloudUpload className="upload-icon" />
          <span>Click or drag to upload photos</span>
          <small>JPG, PNG, GIF, WEBP (Max 5MB each)</small>
        </label>
      </div>

      {photos.length > 0 && (
        <div className="photos-grid">
          <h4>Uploaded Photos ({photos.length}/3)</h4>
          <div className="photo-list">
            {photos.map((photo, index) => (
              <div key={index} className="photo-item">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Upload ${index + 1}`}
                  className="photo-preview"
                />
                <button
                  className="photo-delete"
                  onClick={() => removePhoto(index)}
                >
                  <Delete />
                </button>
                {index === 0 && (
                  <span className="primary-badge">Primary</span>
                )}
              </div>
            ))}
          </div>
          <p className="photo-note">
            First photo will be set as primary. You can upload up to 3 photos.
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;