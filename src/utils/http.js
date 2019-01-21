import axios from 'axios';

/**
 * Base url for our api.
 */
const http = axios.create({
  baseURL: 'hhttps://personaltodo.herokuapp.com/todos'
});

export default http;
