import { merge } from "lodash";
import axios from "../config/axios";

const getHeaders = (headers) => {
  const bearerToken = localStorage.getItem('login_access_token');
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${bearerToken}`,
  };
  return merge({}, defaultHeaders, headers);
};

const joke = async (route, headers = {}) => {
  try {
    return await axios.get(route, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}
const index = async (route, headers = {}) => {
  try {
    return await axios.get(route, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}

const show = async (route, id, headers = {}) => {
  try {
    return await axios.get(route + `/${id}`, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}

const store = async (route, payload, headers = {}) => {
  try {
    return await axios.post(route, payload, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}

const update = async (route, payload, id, headers = {}) => {
  try {
    return await axios.put(route + `/${id}`, payload, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}

const destroy = async (route, id, headers = {}) => {
  try {
    return await axios.delete(route + `/${id}`, {
      headers: getHeaders(headers)
    })
  }
  catch (err) {
    throw err.response
  }
}


export default {
  joke,

  index,
  show,
  store,
  update,
  destroy,
}
