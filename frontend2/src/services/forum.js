import axios from 'axios'

const forum = () => axios.get('http://localhost:3000/posts')

export default {
  forum
}
