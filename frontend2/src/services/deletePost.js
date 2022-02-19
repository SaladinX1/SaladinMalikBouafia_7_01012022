import axios from 'axios'

const deletePost = (id) => axios.delete(`http://localhost:3000/posts/${id}`)

export default {
  deletePost
}
