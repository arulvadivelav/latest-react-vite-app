// SendOtpPage.jsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from '../../components/InputField';
import AlertBox from '../../components/Alert';
import { useAuthForm } from '../../hooks/useAuthForm';
import '../../styles/LoginPage.css';

const SendOtpPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  // DYNAMIC PURPOSE
  const purpose = queryParams.get('purpose') || 'register';

  const {
    data,
    loading,
    alert,
    setAlert,
    submitForm,
    updateField
  } = useAuthForm({
    email_id: '',
    phone: '',
    password: '',
    confirm_password: '',
    purpose: purpose
  });

  const [isFocused, setIsFocused] = useState(false);

  // PASSWORD CHECKS
  const checks = {
    length: data.password.length >= 8,
    upper: /[A-Z]/.test(data.password),
    lower: /[a-z]/.test(data.password),
    number: /\d/.test(data.password),
    special: /[@$!%*?&]/.test(data.password),
  };

  const strengthScore = Object.values(checks).filter(Boolean).length;

  const getStrength = () => {

    if (strengthScore <= 2) {
      return {
        label: 'Weak',
        class: 'weak'
      };
    }

    if (strengthScore === 3 || strengthScore === 4) {
      return {
        label: 'Medium',
        class: 'medium'
      };
    }

    return {
      label: 'Strong',
      class: 'strong'
    };
  };

  const strength = getStrength();

  // SEND OTP
  const handleSendOtp = async (e) => {

    e.preventDefault();

    // EMAIL VALIDATION
    if (!data.email_id) {

      setAlert({
        message: 'Email is required',
        type: 'error'
      });

      return;
    }

    // REGISTER VALIDATION
    if (purpose === 'register') {

      if (
        !data.phone ||
        !data.password ||
        !data.confirm_password
      ) {

        setAlert({
          message: 'All fields are required',
          type: 'error'
        });

        return;
      }

      // PASSWORD STRENGTH
      if (strengthScore < 5) {

        setAlert({
          message: 'Please create a strong password',
          type: 'error'
        });

        return;
      }

      // PASSWORD MATCH
      if (data.password !== data.confirm_password) {

        setAlert({
          message: 'Password and Confirm Password do not match',
          type: 'error'
        });

        return;
      }
    }

    // API CALL
    await submitForm('send-otp', () => {

      navigate('/verify-otp', {
        state: {
          email_id: data.email_id,
          phone: data.phone,
          password: data.password,
          purpose: purpose,
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
            onClose={() =>
              setAlert({
                message: '',
                type: ''
              })
            }
          />

        )}

        {/* DYNAMIC TITLE */}

        <h2>
          {purpose === 'register'
            ? 'Create Account'
            : 'Forgot Password'}
        </h2>

        {/* DYNAMIC SUBTITLE */}

        <p className="subtitle">

          {purpose === 'register'
            ? 'Secure your account with a strong password'
            : 'Enter your email to receive OTP'}

        </p>

        <form onSubmit={handleSendOtp}>

          {/* EMAIL */}

          <div className="form-group">

            <InputField
              type="email"
              placeholder="Enter your email"
              value={data.email_id}
              required
              onChange={(e) =>
                updateField('email_id', e.target.value)
              }
            />

          </div>

          {/* REGISTER ONLY FIELDS */}

          {purpose === 'register' && (

            <>

              {/* PHONE */}

              <div className="form-group">

                <InputField
                  type="text"
                  placeholder="Enter your phone number"
                  value={data.phone}
                  required
                  onChange={(e) =>
                    updateField('phone', e.target.value)
                  }
                />

              </div>

              {/* PASSWORD */}

              <div className="form-group">

                <InputField
                  type="password"
                  placeholder="Enter password"
                  value={data.password}
                  required
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) =>
                    updateField('password', e.target.value)
                  }
                />

                {/* STRENGTH BAR */}

                {data.password && (

                  <div className="strength-container">

                    <div className="strength-bar">

                      <div
                        className={`strength-fill ${strength.class}`}
                      ></div>

                    </div>

                    <span
                      className={`strength-text ${strength.class}`}
                    >
                      {strength.label}
                    </span>

                  </div>

                )}

                {/* PASSWORD RULES */}

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

              {/* CONFIRM PASSWORD */}

              <div className="form-group">

                <InputField
                  type="password"
                  placeholder="Confirm password"
                  value={data.confirm_password}
                  required
                  onChange={(e) =>
                    updateField('confirm_password', e.target.value)
                  }
                />

                {data.confirm_password &&
                  data.password !== data.confirm_password && (

                    <p className="field-error">
                      Password and Confirm Password do not match
                    </p>

                  )}

              </div>

            </>

          )}

          {/* BUTTON */}

          <button type="submit" disabled={loading}>

            {loading
              ? 'Please wait...'
              : 'Send OTP'}

          </button>

        </form>

      </div>

    </div>

  );
};

export default SendOtpPage;