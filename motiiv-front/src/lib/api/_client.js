import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.motiiv.site/motiiv/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
