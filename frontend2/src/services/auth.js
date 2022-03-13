
import axios from 'axios'

const register = (user) =>

  axios.post('http://localhost:3000/auth/register', {

    email: user.email,
    pseudo: user.pseudo,
    password: user.password

  })

const login = (email, password) =>
  axios.post('http://localhost:3000/auth/login', {
    email: email,
    password: password
  }
  )

const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  if (token) return true
  else return false
}

export default {
  register,
  login,
  isAuthenticated
}
