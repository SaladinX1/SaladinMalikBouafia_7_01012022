import axios from 'axios'

const addPost = (message) =>
  axios.post('http://localhost:3000/posts', {
    message: message
  })

export default {
  addPost
}
