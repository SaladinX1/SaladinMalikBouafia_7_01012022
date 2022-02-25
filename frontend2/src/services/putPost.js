import axios from 'axios'

const putPost = (id) => axios.put(`http://localhost:3000/posts/${id}`)

export default {
  putPost
}
