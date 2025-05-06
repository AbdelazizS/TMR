// src/lib/api.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.tmrrealestate.org/api/'
  // withCredentials: true,

})