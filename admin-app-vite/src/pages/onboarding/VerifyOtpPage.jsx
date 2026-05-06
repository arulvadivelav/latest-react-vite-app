import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import AlertBox from '../../components/Alert';
import { useAuthForm } from '../../hooks/useAuthForm';
import '../../styles/LoginPage.css';

const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { email_id, phone, password } = location.state || {};

  useEffect(() => {
    if (!email_id) {
      navigate('/send-otp');
    }
  }, [email_id, navigate]);

  const { data, loading, alert, setAlert, submitForm, updateField } =
    useAuthForm({ email_id: email_id || '', otp: '' });

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!data.otp) {
      setAlert({ message: 'Please enter OTP', type: 'error' });
      return;
    }

    await submitForm('verify-otp', () => {
      navigate('/register', {
        state: {
          email_id,
          phone,
          password
        }
      });
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

        <h2>Enter OTP</h2>
        <p className="subtitle">Check your email and enter OTP</p>

        <form onSubmit={handleVerifyOtp}>
          <div className="form-group">
            <InputField
              type="text"
              placeholder="Enter OTP"
              value={data.otp}
              required={true}
              onChange={(e) => updateField('otp', e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading}>
            Verify OTP
          </button>
        </form>

        <div className="links">
          <a href="/send-otp">Resend OTP</a>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;