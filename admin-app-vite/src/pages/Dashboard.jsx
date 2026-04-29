import React, { useState } from "react";
import DashboardCard from "../components/DashboardCard";
import ProfilesListModal from "../components/ProfilesListModal";
import { dashboardItems } from "../configs/DashboardConfig";
import { getDashboardData } from "../data/dashboardData";
import "../styles/Dashboard.css";

const MatrimonyDashboard = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const dashboardData = getDashboardData();
  
  const selectedItem = dashboardItems.find(
    (item) => item.key === selectedKey
  );

  // Debug: Log when selectedKey changes
  console.log("Selected Key:", selectedKey);
  console.log("Selected Item:", selectedItem);
  console.log("Profiles to show:", dashboardData[selectedKey]);

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="section-header">
          <h2 className="dashboard-title">My Activity Dashboard</h2>
          <p className="dashboard-subtitle">Track your interactions & connections</p>
        </div>

        <div className="dashboard-grid">
          {dashboardItems.map((item) => (
            <DashboardCard
              key={item.key}
              label={item.label}
              count={dashboardData[item.key]?.length || 0}
              icon={item.icon}
              onClick={() => setSelectedKey(item.key)}
            />
          ))}
        </div>

        {selectedKey && (
          <ProfilesListModal
            isOpen={!!selectedKey}
            title={selectedItem?.label}
            profiles={dashboardData[selectedKey] || []}
            onClose={() => setSelectedKey(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MatrimonyDashboard;