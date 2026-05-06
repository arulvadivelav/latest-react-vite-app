import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoginPage from './pages/onboarding/LoginPage';
import RegisterSendOTP from './pages/onboarding/RegisterSendOTP';
import VerifyOtpPage from './pages/onboarding/VerifyOtpPage';
import HomePage from './pages/HomePage'
import DashboardPage from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPassword'
import ProfileCardView from './pages/ProfilePage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'
import ProfileDetails from "./pages/ProfileDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< HomePage />} />

          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/register-send-otp" element={<RegisterSendOTP/>} />
          <Route path="/verify-otp" element={<VerifyOtpPage/>} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profiles" element={< ProfileCardView />} />
          <Route path="/about-us" element={< AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/forgot-password" element={< ForgotPasswordPage />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />

          {/* You can add other routes like Home, Register, etc */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
