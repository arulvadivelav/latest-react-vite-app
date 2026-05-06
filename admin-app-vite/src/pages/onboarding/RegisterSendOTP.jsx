import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from '../../components/InputField';
import AlertBox from '../../components/Alert';
import { useAuthForm } from '../../hooks/useAuthForm';
import '../../styles/LoginPage.css';

const SendOtpPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navigate = useNavigate();

  const { data, loading, alert, setAlert, submitForm, updateField } =
    useAuthForm({
      email_id: '',
      phone: '',
      password: '',
      confirm_password: ''
    });

  const [isFocused, setIsFocused] = useState(false);

  const checks = {
    length: data.password.length >= 8,
    upper: /[A-Z]/.test(data.password),
    lower: /[a-z]/.test(data.password),
    number: /\d/.test(data.password),
    special: /[@$!%*?&]/.test(data.password),
  };

  const strengthScore = Object.values(checks).filter(Boolean).length;

  const getStrength = () => {
    if (strengthScore <= 2) return { label: 'Weak', class: 'weak' };
    if (strengthScore === 3 || strengthScore === 4)
      return { label: 'Medium', class: 'medium' };
    return { label: 'Strong', class: 'strong' };
  };

  const strength = getStrength();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!data.email_id || !data.phone || !data.password || !data.confirm_password) {
      setAlert({ message: 'All fields are required', type: 'error' });
      return;
    }

    if (strengthScore < 5) {
      setAlert({
        message: 'Please create a strong password before continuing',
        type: 'error'
      });
      return;
    }

    if (data.password !== data.confirm_password) {
      setAlert({
        message: 'Password and Confirm Password do not match',
        type: 'error'
      });
      return;
    }

    await submitForm('send-otp', () => {
      navigate(`/verify-otp`, {
        state: {
          email_id: data.email_id,
          phone: data.phone,
          password: data.password
        }
      });
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {alert.message && (
          <AlertBox
            message={alert.message}
            alertType={alert.type}
            onClose={() => setAlert({ message: '', type: '' })}
          />
        )}

        <h2>Create Account</h2>
        <p className="subtitle">Secure your account with a strong password</p>

        <form onSubmit={handleSendOtp}>
          <div className="form-group">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={data.email_id}
              required
              onChange={(e) => updateField('email_id', e.target.value)}
            />
          </div>

          <div className="form-group">
            <InputField
              type="text"
              placeholder="Enter your phone number"
              value={data.phone}
              required
              onChange={(e) => updateField('phone', e.target.value)}
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="form-group">
            <InputField
              type="password"
              placeholder="Enter password"
              value={data.password}
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => updateField('password', e.target.value)}
            />

            {/* Strength Bar */}
            {data.password && (
              <div className="strength-container">
                <div className="strength-bar">
                  <div className={`strength-fill ${strength.class}`}></div>
                </div>
                <span className={`strength-text ${strength.class}`}>
                  {strength.label}
                </span>
              </div>
            )}

            {/* Checklist */}
            {isFocused && (
              <div className="password-rules">
                <p className={checks.length ? 'valid' : 'invalid'}>
                  At least 8 characters
                </p>
                <p className={checks.upper ? 'valid' : 'invalid'}>
                  One uppercase letter
                </p>
                <p className={checks.lower ? 'valid' : 'invalid'}>
                  One lowercase letter
                </p>
                <p className={checks.number ? 'valid' : 'invalid'}>
                  One number
                </p>
                <p className={checks.special ? 'valid' : 'invalid'}>
                  One special character
                </p>
              </div>
            )}
          </div>

          <div className="form-group">
            <InputField
              type="password"
              placeholder="Confirm password"
              value={data.confirm_password}
              required
              onChange={(e) => updateField('confirm_password', e.target.value)}
            />

              {data.confirm_password && data.password !== data.confirm_password && (
                <p className="field-error">
                  Password and Confirm Password do not match
                </p>
              )}
          </div>

          <button type="submit" disabled={loading}>
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendOtpPage;