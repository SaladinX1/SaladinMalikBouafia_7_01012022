import axios from 'axios'

const config = {
  header: {
    'Content-Type': 'multipart/form-data'
  }
}

const addPost = (data, userId) =>
  axios.post('http://localhost:3000/posts', data, userId, config)

export default {
  addPost
}
