import axios from 'axios'

const addPost = () => axios.post('http://localhost:3000/posts')

export default {
  addPost
}
