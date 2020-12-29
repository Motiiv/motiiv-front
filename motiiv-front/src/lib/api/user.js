import client from "./client"

export const userInfo = (username) => {
  return client.get(`/users/${username}`);
};

export const userRepo = (username) => {
  return client.get(`/users/${username}/repos`);
};
