// mock/dashboardData.js

import allProfiles from "../mock/profiles";

/**
 * Simulate user actions using profile IDs
 * (later replace with real API data)
 */
const currentUserId = 100; // dummy logged-in user

// 🔥 Mock relationships (simulate real matrimony activity)
const shortlistedByYouIds = [1, 3, 5];
const shortlistedYouIds = [2, 4];

const viewedByYouIds = [1, 2, 6, 7];
const viewedYouIds = [3, 8];

const requestedConnectionIds = [9, 10];
const connectionRequestsIds = [11, 12];

const acceptedConnectionIds = [6, 7];

const blockedProfileIds = [4]; // ✅ NEW

// 🔧 Helper function
const getProfilesByIds = (ids) =>
  allProfiles.filter((profile) => ids.includes(profile.id));

/**
 * Final dashboard data
 */
export const getDashboardData = () => {
  return {
    shortlisted_by_you: getProfilesByIds(shortlistedByYouIds),

    shortlisted_you: getProfilesByIds(shortlistedYouIds),

    viewed_by_you: getProfilesByIds(viewedByYouIds),

    viewed_you: getProfilesByIds(viewedYouIds),

    requested_connection: getProfilesByIds(requestedConnectionIds),

    connection_requests: getProfilesByIds(connectionRequestsIds),

    accepted_connection: getProfilesByIds(acceptedConnectionIds),

    blocked_profiles: getProfilesByIds(blockedProfileIds), // ✅ added
  };
};