import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "https://api.github.com/";

export default client;
