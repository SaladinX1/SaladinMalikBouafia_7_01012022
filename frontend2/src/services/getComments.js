import axios from 'axios'

const comments = (id) => axios.get(`http://localhost:3000/posts/${id}/comments`)

export default {
  comments
}
