import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:8080/api'
})

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN