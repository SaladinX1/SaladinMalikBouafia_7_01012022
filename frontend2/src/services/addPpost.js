import axios from 'axios'

const addPost = (post) =>
  axios.post('http://localhost:3000/posts', post)

export default {
  addPost
}
