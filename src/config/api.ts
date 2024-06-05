import axios from 'axios';

const baseUrlProduct = 'http://localhost:3001/';

const getData = axios.create({
  baseURL: baseUrlProduct,
  timeout: 10 * 1000,
  timeoutErrorMessage: 'request timed out',
});

getData.interceptors.request.use(async (req) => {
  req.headers['Content-Type'] = 'application/json';
  req.headers['Accept'] = 'application/json';
  return req;
});

export default getData;
