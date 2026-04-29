import { useState } from 'react';
import { apiRequest } from '../services/AuthServices';
import { RESPONSE_200, RESPONSE_400 } from '../constants/constants';

/**
 * Custom hook for auth form state management
 * Eliminates duplicate logic across LoginPage, ForgotPassword, SendOTP
 * 
 * Usage:
 * const { data, errorMsg, loading, alert, setAlert, submitForm, updateField } = 
 *   useAuthForm({ email: '', password: '' });
 * 
 * @param {object} initialData - Initial form data object
 * @returns {object} Form state and handlers
 */
export const useAuthForm = (initialData = {}) => {
  const [data, setData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  /**
   * Submit form to API endpoint
   * @param {string} endpoint - API endpoint name
   * @param {function} onSuccess - Callback on successful response
   */
  const submitForm = async (endpoint, onSuccess) => {
    setErrorMsg({});
    setLoading(true);

    try {
      const result = await apiRequest(endpoint, 'POST', data);

      if (result.status_code === RESPONSE_200) {
        setAlert({ message: result.message, type: 'success' });
        if (onSuccess) {
          setTimeout(() => onSuccess(result), 2000);
        }
      } else if (result.status_code === RESPONSE_400) {
        setAlert({ message: result.message, type: 'error' });
        setErrorMsg({ general: result.message });
      } else {
        setAlert({ message: result.message, type: 'error' });
      }
    } catch (error) {
      setAlert({ message: "Internal server error", type: 'error' });
    }

    setLoading(false);
  };

  /**
   * Update a single field
   * @param {string} field - Field name
   * @param {any} value - New value
   */
  const updateField = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * Reset entire form
   */
  const resetForm = () => {
    setData(initialData);
    setErrorMsg({});
    setAlert({ message: '', type: '' });
  };

  return {
    data,
    setData,
    errorMsg,
    setErrorMsg,
    loading,
    alert,
    setAlert,
    submitForm,
    updateField,
    resetForm,
  };
};

export default useAuthForm;
