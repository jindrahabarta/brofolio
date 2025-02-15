import axios from 'axios'

export const nextClient = axios.create({
    baseURL: '/api/v1',
    headers: { 'Content-Type': 'application/json' },
})
