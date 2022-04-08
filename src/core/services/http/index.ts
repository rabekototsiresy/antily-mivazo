import axios from "axios";
import { getToken } from "../../../common/utils/token";
export const http = axios.create({
    baseURL: 'http://localhost:9090/api/v1',
    // baseURL: 'https://apiscout.herokuapp.com/api/v1',
    headers: {
        'Authorization':  `Bearer ${getToken('token') || ''}`,
    }
  });