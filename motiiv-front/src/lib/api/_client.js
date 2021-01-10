import axios from 'axios';

const client = axios.create({
  baseURL: 'http://52.78.212.95:3004/motiiv/api/v1',
  headers: {
    'Content-Type': 'application/json',
    credentials: true,
<<<<<<< HEAD
    jwt:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoi7Jqw7JiBIiwic25zSWQiOiIxIiwic29jaWFsVHlwZSI6Imtha2FvIiwiaWF0IjoxNjEwMjU3Mzk5LCJleHAiOjE2MTI4NDkzOTksImlzcyI6Im1vdGlpdiJ9.3nwQuSC8xJEX7oPr0IFNxJoe45YosvfXT953c4Vws_s',
=======
    //jwt:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoi7Jqw7JiBIiwic25zSWQiOiIxIiwic29jaWFsVHlwZSI6Imtha2FvIiwiaWF0IjoxNjEwMDA4NzU1LCJleHAiOjE2MTI2MDA3NTUsImlzcyI6Im1vdGlpdiJ9.1_CTWbQWps8vcpPUzzKuAYFy7Th4fqpIPummhhabEm8',
>>>>>>> 537302c9ec1f2be2fc6f5c2bd4e3494bb563bd87
  },
});
//ApiConfig.defaults.headers.jwt = data.data.accessToken; // api 토큰 바꿔치기
export default client;
