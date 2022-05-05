export const getToken = () => {
  return localStorage.getItem("coin_token");
};

export const setToken = (token) => {
  localStorage.setItem("coin_token", token);
};

export const removeToken = () => {
  localStorage.removeItem("coin_token");
};
