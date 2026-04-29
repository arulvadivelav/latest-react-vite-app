import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import AlertBox from '../components/Alert';
import { useAuthForm } from '../hooks/useAuthForm';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { data, errorMsg, loading, alert, setAlert, submitForm, updateField } =
    useAuthForm({ email_id: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    await submitForm('login', () => {
      localStorage.setItem("isLoggedIn", "true");
      navigate('/profiles');
      window.location.reload();
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

        <h2>Welcome Back</h2>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={data.password}
              required={true}
              onChange={(e) => updateField('password', e.target.value)}
            />
            {errorMsg.password && <p className="fieldError">{errorMsg.password}</p>}
          </div>

          {errorMsg.general && <p className="fieldError">{errorMsg.general}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="links">
          <a href="/send-otp?type=forgot">Forgot Password?</a>
          <span>|</span>
          <a href="/send-otp?type=register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;