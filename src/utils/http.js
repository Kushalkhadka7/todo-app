import axios from 'axios';

/**
 * base url for our api
 */
const http = axios.create({
  baseURL: 'http://localhost:3000'
});

export default http;
