import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import AlertBox from '../../components/Alert';
import { useAuthForm } from '../../hooks/useAuthForm';

const VerifyOtpPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const {
    email_id,
    phone,
    password,
    purpose
  } = location.state || {};

  useEffect(() => {
    if (!email_id || !purpose) {
      navigate('/');
    }
  }, []);

  const {
    data,
    loading,
    alert,
    setAlert,
    submitForm,
    updateField
  } = useAuthForm({
    email_id: email_id || '',
    password: password || '',
    otp: '',
    purpose: purpose || '',
  });

  const handleVerifyOtp = async (e) => {

    e.preventDefault();

    if (!data.otp) {
      setAlert({
        message: 'Please enter OTP',
        type: 'error'
      });
      return;
    }

    await submitForm('verify-otp', () => {
      // REGISTER FLOW
      if (purpose === "register") {
        navigate('/register', {
          state: {
            email_id,
            phone,
            password,
          }
        });
      }

      // FORGOT PASSWORD FLOW
      else if (purpose === "forgot_password") {
        navigate('/reset-password', {
          state: {
            email_id,
            password
          }
        });

      }

    });

  };

  const handleResendOtp = async () => {

    await submitForm('send-otp');

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

        <h2>Verify OTP</h2>

        <form onSubmit={handleVerifyOtp} className='form-verify-otp'>

          <InputField
            type="text"
            placeholder="Enter OTP"
            value={data.otp}
            required={true}
            onChange={(e) => updateField('otp', e.target.value)}
          />

          <div>
            <button type="submit" disabled={loading}>
              Verify OTP
            </button>
          </div>

        </form>

        <div className="links">

          <button onClick={handleResendOtp}>
            Resend OTP
          </button>

        </div>

      </div>

    </div>
  );
};

export default VerifyOtpPage;