import { FaEye, FaHeart, FaUserCheck, FaUserPlus, FaBan } from "react-icons/fa";

export const dashboardItems = [
  { key: "shortlisted_by_you", label: "Shortlisted by You", icon: FaHeart, color: "#ff6b6b" },
  { key: "shortlisted_you", label: "Shortlisted You", icon: FaHeart, color: "#ff6b6b" },
  { key: "viewed_you", label: "Viewed You", icon: FaEye, color: "#4ecdc4" },
  { key: "viewed_by_you", label: "Viewed by You", icon: FaEye, color: "#4ecdc4" },
  { key: "requested_connection", label: "Requested Connection", icon: FaUserPlus, color: "#45b7d1" },
  { key: "connection_requests", label: "Connection Requests", icon: FaUserPlus, color: "#45b7d1" },
  { key: "accepted_connection", label: "Accepted Connection", icon: FaUserCheck, color: "#96ceb4" },
  { key: "blocked_profiles", label: "Blocked Profiles", icon: FaBan, color: "#ff6b6b" },
];