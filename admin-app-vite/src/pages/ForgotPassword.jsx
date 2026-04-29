import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import AlertBox from '../components/Alert';
import { useAuthForm } from '../hooks/useAuthForm';
import '../styles/LoginPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { data, errorMsg, alert, setAlert, submitForm, updateField } =
    useAuthForm({ email_id: '', otp: '', new_password: '', confirm_password: '' });

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await submitForm('forgot-password', () => {
      navigate('/');
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

        <h2>Reset Password</h2>

        <form onSubmit={handleForgotPassword}>
          <div className="form-group">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={data.email_id}
              required={true}
              onChange={(e) => updateField('email_id', e.target.value)}
            />
            {errorMsg.email_id && <p className="fieldError">{errorMsg.email_id}</p>}
          </div>

          <div className="form-group">
            <InputField
              type="password"
              placeholder="Enter OTP"
              value={data.otp}
              required={true}
              onChange={(e) => updateField('otp', e.target.value)}
            />
            {errorMsg.otp && <p className="fieldError">{errorMsg.otp}</p>}
          </div>

          <div className="form-group">
            <InputField
              type="password"
              placeholder="New Password"
              value={data.new_password}
              required={true}
              onChange={(e) => updateField('new_password', e.target.value)}
            />
            {errorMsg.new_password && <p className="fieldError">{errorMsg.new_password}</p>}
          </div>

          <div className="form-group">
            <InputField
              type="password"
              placeholder="Confirm Password"
              value={data.confirm_password}
              required={true}
              onChange={(e) => updateField('confirm_password', e.target.value)}
            />
            {errorMsg.confirm_password && <p className="fieldError">{errorMsg.confirm_password}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
