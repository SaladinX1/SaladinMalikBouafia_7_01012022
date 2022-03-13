import axios from 'axios'

const likeDislike = (id) => axios.post(`http://localhost:3000/posts/${id}/like-unlike-post`)

export default {
  likeDislike
}
