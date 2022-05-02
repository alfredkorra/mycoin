import axios from 'axios';
import {getToken} from "./helpers";

export default axios.create({
    baseURL: 'http://185.209.230.64:8090/my-coin-api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken() ? `${getToken()}` : {}
    },
});