import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import AlertBox from '../../components/Alert';
import { useAuthForm } from '../../hooks/useAuthForm';

const ForgotPasswordPage = () => {

  const navigate = useNavigate();

  const {
    data,
    loading,
    alert,
    setAlert,
    submitForm,
    updateField
  } = useAuthForm({
    email_id: '',
    purpose: 'forgot_password',
  });

  const handleSendOtp = async (e) => {

    e.preventDefault();

    if (!data.email_id) {
      setAlert({
        message: 'Email is required',
        type: 'error'
      });
      return;
    }

    await submitForm('send-otp', () => {

      navigate('/verify-otp', {
        state: {
          email_id: data.email_id,
          purpose: 'forgot_password',
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

        <h2>Forgot Password</h2>

        <form onSubmit={handleSendOtp}>

          <InputField
            type="email"
            placeholder="Enter Email"
            value={data.email_id}
            required
            onChange={(e) => updateField('email_id', e.target.value)}
          />

          <button type="submit" disabled={loading}>
            Send OTP
          </button>

        </form>

      </div>

    </div>
  );
};

export default ForgotPasswordPage;