import axios from "axios";
import { store } from './../Root';

// Creates an instance of axios
const backEnd =  axios.create({
  baseURL: process.env.REACT_APP_API_URI
});

backEnd.interceptors.request.use(function(config){
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default backEnd