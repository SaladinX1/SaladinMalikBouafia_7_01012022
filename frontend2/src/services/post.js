import axios from 'axios'

const getPostById = (id) => axios.get(`http://localhost:3000/posts/${id}`)

export default {
  getPostById
}
