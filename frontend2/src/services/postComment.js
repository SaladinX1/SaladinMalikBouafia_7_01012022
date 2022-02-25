import axios from 'axios'

const addComment = (comment, id) =>
  axios.post(`http://localhost:3000/posts/${id}/comments`, comment)

export default {
  addComment
}