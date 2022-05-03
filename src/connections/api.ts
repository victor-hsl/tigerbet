import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {'Authorization': 'Bearer test_1a0e15658d3c05990f8b00e108175a'}
})

export default api;