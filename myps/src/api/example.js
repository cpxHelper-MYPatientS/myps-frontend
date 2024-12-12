// import { apiAuth } from "./api";
import { api } from "./api";

const get = async (url, config = {}) => {
  //   const res = await apiAuth.get(url, config);
  const res = await api.get(url, config);
  return res?.data;
};

const post = async (url, data, config = {}) => {
  //   const res = await apiAuth.post(url, data, config);
  const res = await api.post(url, data, config);
  return res?.data;
};

const put = async (url, data, config = {}) => {
  //   const res = await apiAuth.put(url, data, config);
  const res = await api.put(url, data, config);
  return res?.data;
};

const patch = async (url, data, config = {}) => {
  //   const res = await apiAuth.patch(url, data, config);
  const res = await api.patch(url, data, config);
  return res?.data;
};

const del = async (url, config = {}) => {
  //   const res = await apiAuth.delete(url, config);
  const res = await api.delete(url, config);
  return res?.data;
};

export { get, post, put, patch, del };
