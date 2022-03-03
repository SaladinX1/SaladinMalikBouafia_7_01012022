import axios from 'axios'

const deleteComment = (id) => axios.delete(`http://localhost:3000/comments/${id}`)

export default {
  deleteComment
}
