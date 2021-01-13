import axios from 'axios';

const client = axios.create({
  baseURL: 'https://www.motiiv.site/motiiv/api/v1', // www.motiv.site/motiiv/api/v1 'http://52.78.212.95:3004/motiiv/api/v1'
  headers: {
    'Content-Type': 'application/json',
    userToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoi7Jqw7JiBIiwic25zSWQiOiIxIiwic29jaWFsVHlwZSI6Imtha2FvIiwiaWF0IjoxNjEwMjY4NTc4LCJleHAiOjE2MTI4NjA1NzgsImlzcyI6Im1vdGlpdiJ9.3cmNSJDIrs1e8XB8fE1G9p4HzdlzQHMCOTbY10AoKrg',
  },
});
//ApiConfig.defaults.headers.jwt = data.data.accessToken; // api 토큰 바꿔치기
export default client;
