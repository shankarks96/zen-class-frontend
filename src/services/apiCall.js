/* eslint-disable prettier/prettier */
import axios from 'axios';

const BASE_URL = 'https://zen-class-backend-mkx3.onrender.com/';
const HEADERS = { 'Content-Type': 'application/json' };
const TIMEOUT = 15000; // Set your timeout value here
const pendingRequests = new Map();

const getAccessToken = async () => {
  let accessToken = window.sessionStorage.getItem('access_token');
  return accessToken;
};

const apiCall = async (method, endpoint, data, loop = false) => {
  const accessToken = await getAccessToken();
  const headers = {
    ...HEADERS,
    Authorization: `Bearer ${accessToken}`,
  };

  const requestIdentifier = `${method}${endpoint}${JSON.stringify(data)}`;
  // if (pendingRequests.has(requestIdentifier) && !loop) {
  //   return pendingRequests.get(requestIdentifier);
  // }

  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
      headers,
      timeout: TIMEOUT,
    });

    pendingRequests.set(requestIdentifier, response.data.data);
    return response.data;
  } catch (error) {
    console.error('Error in API call', error);
    if (error.response.status === 401) {
      // Redirect to login page
      window.location.href = '/login';
      sessionStorage.clear();
    } else {
      throw error.response.data;
    }
  }
};

export default apiCall;
