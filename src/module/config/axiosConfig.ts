import axios from "axios";
import authToken from '../../utils/authToken';

const token = authToken.getToken();
console.log(process.env.REACT_APP_BACKEND)
export const instance= axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  responseType: 'json',
  headers: {
    'Authorization': token,
  },

});
const successResponse = (response: { data: any; }) => {
  return response.data;
};

const failResponse = (error: any) => {
  return Promise.reject(error);
};

const Request = (options: any) => instance(options).then(successResponse).catch(failResponse);

export default Request;