import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://62de71809c47ff309e73812f.mockapi.io/api/v1'
})