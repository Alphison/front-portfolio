import axios, {type CreateAxiosDefaults} from 'axios' 

const options: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        'Content-Type':'application/json'
    }
}

export const axiosClassic = axios.create(options)