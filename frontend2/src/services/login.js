import axios from 'axios'

const login = (email, password) =>
  axios.post('http://localhost:3000/auth/signin', {
    email: email,
    password: password
  })

export default {
  login
}
