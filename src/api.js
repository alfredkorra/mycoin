import axios from 'axios';
import {getToken} from "./helpers";

export default axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken() ? `Bearer ${getToken()}` : {}
    },
});