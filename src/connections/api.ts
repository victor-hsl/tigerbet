import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {'Authorization': 'Bearer test_94fcc7491cbf6d0769a5aa08a5e6d4'}
})

export default api;