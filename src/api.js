import axios from 'axios';
import {getToken} from "./helpers";


export default axios.create({
    baseURL: 'http://localhost:8090/my-coin-api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken() ? `Bearer ${getToken()}` : {},
        'Accept': 'application/json, text/plain, */*'
    },
});