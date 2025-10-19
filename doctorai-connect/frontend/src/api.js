import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8787'
export const api = axios.create({
  baseURL,
  withCredentials: true
})
