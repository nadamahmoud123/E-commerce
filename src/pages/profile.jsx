import React from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
// Header.js

// Profile.js
// Header.js

// Profile.js
const Profile = () => {
  const navigate = useNavigate();

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  // Check if user data is available
  if (!userData) {
    // If no user data, redirect to the login page
    navigate("/login");
    return null; // Return null to prevent rendering anything in this case
  }

  const handleLogout = () => {
    // Clear user data and authentication token from local storage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <Helmet title="User Profile">
      <CommonSection title={userData.name} email={userData.email} />
    </Helmet>
  );
};

export default Profile;
