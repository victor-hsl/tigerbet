import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {'Authorization': 'Bearer live_d831f485550ad72dc3e7dfbddb4c10'}
})

export default api;