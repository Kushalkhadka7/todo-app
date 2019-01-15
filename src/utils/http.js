import axios from 'axios';

/**
 * Base url for our api.
 */
const http = axios.create({
  baseURL: 'https://personaltodo.herokuapp.com/'
});

export default http;
