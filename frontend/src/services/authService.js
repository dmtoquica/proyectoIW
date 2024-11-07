import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const login = (username, password) => {
  return axios.post(API_URL + 'login', { username, password });
};

const register = (username, password) => {
  return axios.post(API_URL + 'register', { username, password });
};

export { login, register };
