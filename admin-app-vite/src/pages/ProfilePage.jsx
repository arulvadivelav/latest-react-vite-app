// Profile.jsx
import React, { useState, useCallback, useRef } from "react";
import SearchSection from "../components/SearchSection";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModel";
import { fetchProfiles } from "../mock/profiles";
import "../styles/Profile.css";

const ITEMS_PER_PAGE = 10;

const ProfilePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [likedProfiles, setLikedProfiles] = useState({});
  const [connectedProfiles, setConnectedProfiles] = useState({});
  const [favoriteProfiles, setFavoriteProfiles] = useState({});

  // Results state
  const [profileData, setProfileData] = useState(null); // null = not searched yet
  const [currentFilters, setCurrentFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const runSearch = useCallback((filters, page = 1) => {
    const result = fetchProfiles({ filters, page, itemsPerPage: ITEMS_PER_PAGE });
    setProfileData(result);
    setCurrentFilters(filters);
    setCurrentPage(result.page);
  }, []);

  const handleClear = () => {
    setProfileData(null);
    setCurrentFilters({});
    setCurrentPage(1);
  };
  const handleSearch = (filters) => {
    runSearch(filters, 1);

    setTimeout(() => {
      scrollToGridTop();
    }, 100);
  };

  const resultsRef = useRef(null);
  
  const scrollToGridTop = () => {
    if (!resultsRef.current) return;

    const yOffset = -170;
    const y =
      resultsRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    runSearch(currentFilters, page);

    setTimeout(() => {
      scrollToGridTop();
    }, 100);
  };

  const handleLike = (profileId) => {
    setLikedProfiles((prev) => ({ ...prev, [profileId]: !prev[profileId] }));
  };

  const handleConnect = (profileId) => {
    setConnectedProfiles((prev) => ({ ...prev, [profileId]: !prev[profileId] }));
  };

  const handleFavorite = (profileId) => {
    setFavoriteProfiles((prev) => ({ ...prev, [profileId]: !prev[profileId] }));
  };

  const getVisiblePages = (current, total) => {
    const pages = [];

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);

    if (current > 4) {
      pages.push("...");
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 3) {
      pages.push("...");
    }

    pages.push(total);

    return pages;
  };
  
  const hasResults = profileData !== null;

  return (
    <div className="contact-container">
      {/* Filter Section */}
      <SearchSection
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {/* Results Section */}
      {hasResults && (
        <div className="results-section">
          {/* Result header */}
          <div className="results-header">
            <span className="results-count-badge">
              {profileData.totalItems} profile{profileData.totalItems !== 1 ? "s" : ""} found
            </span>
            <span className="results-page-info">
              Page {profileData.page} of {profileData.totalPages}
            </span>
          </div>

          {profileData.items.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">💔</div>
              <h3>No profiles found</h3>
              <p>Try adjusting your filters to find more matches.</p>
            </div>
          ) : (
            <>
              <div className="profile-card-grid" ref={resultsRef}>
                {profileData.items.map((profile) => (
                  <ProfileCard
                    key={profile.id}
                    profile={profile}
                    onClick={setSelectedProfile}
                  />
                ))}
              </div>

              {/* Pagination */}
              {profileData.totalPages > 1 && (
                <div className="pagination">
                  {/* Prev Button */}
                  <button
                    className="pagination-btn pagination-arrow"
                    disabled={profileData.page <= 1}
                    onClick={() => handlePageChange(profileData.page - 1)}
                  >
                    ←
                  </button>

                  <div className="pagination-pages">
                    {getVisiblePages(profileData.page, profileData.totalPages).map((item, index) =>
                      item === "..." ? (
                        <span key={index} className="pagination-ellipsis">...</span>
                      ) : (
                        <button
                          key={item}
                          className={`pagination-btn pagination-page ${
                            profileData.page === item ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(item)}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>

                  {/* Next Button */}
                  <button
                    className="pagination-btn pagination-arrow"
                    disabled={profileData.page >= profileData.totalPages}
                    onClick={() => handlePageChange(profileData.page + 1)}
                  >
                    →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onLike={handleLike}
        onConnect={handleConnect}
        onFavorite={handleFavorite}
        likedStatus={likedProfiles}
        connectedStatus={connectedProfiles}
        favoriteStatus={favoriteProfiles}
      />
    </div>
  );
};

export default ProfilePage;