import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
      'API-KEY': '664ee9c8-55d9-4748-9e25-f160062b257e',
  }
});

export const usersApi = {
  getUsers(currentPage = 1, countPerPage = 10) {
    return instance.get(`users?page=${currentPage}&count=${countPerPage}`)
      .then(response => response.data);
  }
};

export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then((response) => response.data)
  }
};

export const authApi = {
  getAuthMe() {
    return instance.get(`auth/me`, { withCredentials: true })
      .then((response) => response.data);
  }
};

export const followApi = {
  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then((response) => response.data)
  },
  setFollow(userId) {
    return instance.post(`follow/${userId}`)
    .then((response) => response.data)
  }
};