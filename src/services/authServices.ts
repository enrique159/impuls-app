import axios from 'axios'

const { VITE_API_URL } = import.meta.env

export default {
  login: (email: string, password: string) => {
    return axios.post(`${VITE_API_URL}/auth/signin`, { email, password })
      .then((response) => response)
      .catch((error) => error.response)
  },
}