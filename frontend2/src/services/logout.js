import axios from 'axios'

const logout = (token) =>
  axios.post('http://localhost:3000/auth/logout', {
    token: token
  })

export default {
  logout
}