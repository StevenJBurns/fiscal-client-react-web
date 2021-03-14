const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = (userId: string) => ({
  type: USER_LOGIN,
  payload: userId,
});

export const userLogout = (userId: string) => ({
  type: USER_LOGOUT,
  payload: userId,
});
