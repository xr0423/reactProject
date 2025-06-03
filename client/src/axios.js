import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend base URL
  // You can add headers here, e.g.
  // headers: { Authorization: `Bearer ${token}` }
});

export default instance;
