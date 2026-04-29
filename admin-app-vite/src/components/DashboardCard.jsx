import React from "react";

const DashboardCard = ({ label, count, icon: Icon, onClick }) => {
  const handleClick = () => {
    console.log("Card clicked:", label);
    if (onClick) onClick();
  };

  return (
    <div className="dashboard-card" onClick={handleClick}>
      <div className="dashboard-icon">
        {Icon && <Icon />}
      </div>
      <h3 className="dashboard-card-title">{label}</h3>
      <p className="dashboard-count">{count}</p>
      <div className="card-hover-effect"></div>
    </div>
  );
};

export default DashboardCard;