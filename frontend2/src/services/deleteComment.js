import axios from 'axios'

const deleteComment = (id) => axios.delete(`http://localhost:3000/posts/${id}/comments`)

export default {
  deleteComment
}
