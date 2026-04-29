import React from 'react';
import { useState } from 'react';
import InputField from '../components/InputField';
import { useNavigate, useLocation } from 'react-router-dom';
import AlertBox from '../components/Alert';
import { useAuthForm } from '../hooks/useAuthForm';
import '../styles/LoginPage.css';

const SendOtpPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const navigate = useNavigate();
  const { data, loading, alert, setAlert, submitForm, updateField } =
    useAuthForm({ email_id: '', otp: '' });

  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    await submitForm('send-otp', () => {
      setIsOtpSent(true);
    });
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    await submitForm('verify-otp', () => {
      if (type === "register") {
        navigate('/register');
      } else if (type === "forgot") {
        navigate('/forgot-password');
      }
    });
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-box">
        {alert.message && (
          <AlertBox
            message={alert.message}
            alertType={alert.type}
            onClose={() => setAlert({ message: '', type: '' })}
          />
        )}

        <h2>Verify Email</h2>

        <form onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp}>
          <div className="form-group">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={data.email_id}
              required={true}
              onChange={(e) => updateField('email_id', e.target.value)}
              disabled={isOtpSent}
            />
          </div>

          {isOtpSent && (
            <div className="form-group">
              <InputField
                type="password"
                placeholder="Enter OTP"
                value={data.otp}
                required={true}
                onChange={(e) => updateField('otp', e.target.value)}
              />
            </div>
          )}

          <button type="submit" disabled={loading}>
            {isOtpSent ? 'Verify OTP' : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendOtpPage;
