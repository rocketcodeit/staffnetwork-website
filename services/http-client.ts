import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: { 'Content-Type': 'application/json; charset=utf-8'},
});

export default httpClient;
