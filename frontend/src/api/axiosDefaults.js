import axios from "axios";

//axios.defaults.baseURL = 'https://drfapi90-4efd6b4b76d8.herokuapp.com/';
//axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();