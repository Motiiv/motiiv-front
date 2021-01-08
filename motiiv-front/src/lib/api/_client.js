import axios from 'axios';

const client = axios.create({
  baseURL: 'http://52.78.212.95:3004/motiiv/api/v1',
  headers: {
    'Content-Type': 'application/json',
    /* credentials: true, */
    jwt:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoi7Jqw7JiBIiwic25zSWQiOiIxIiwic29jaWFsVHlwZSI6Imtha2FvIiwiaWF0IjoxNjEwMDA4NzU1LCJleHAiOjE2MTI2MDA3NTUsImlzcyI6Im1vdGlpdiJ9.1_CTWbQWps8vcpPUzzKuAYFy7Th4fqpIPummhhabEm8',
  },
});
//ApiConfig.defaults.headers.jwt = data.data.accessToken; // api 토큰 바꿔치기
export default client;
