import axios from "axios";
import { BACKEND_URL } from "../constants";



export const HttpService = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type':'aplication/json'
    }
});