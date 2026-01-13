import axios from "axios";

/**
 * Send email via backend API
 * @param {Object} data - { name, email, message }
 * @param {Function} onSuccess - callback on success
 * @param {Function} onError - callback on error
 * @returns {Promise<void>}
 */

const BASE_URL = process.env?.REACT_APP_API_URL;
console.log(BASE_URL);
export const sendEmail = async (data) => {
  try {
    const response = await axios.post(`http://localhost:4000/api/send-email`, data);
    // const response = await axios.post(`${BASE_URL}/api/send-email`, data);
    if (response.status === 200 && response.data.success) {
      return true
    }
    else {
      return false;
    }
  }
  catch (err) {
    return false;
  }
};
