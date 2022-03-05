
import http from '../http'

const pathUrl = '/posts'

const getAllPost = () => http.get(pathUrl)

const addPost = (data, userId) => http.post(pathUrl, data, userId)

const getPostById = (id) => http.get(`${pathUrl}/${id}`)

const deletePost = (id) => http.delete(`${pathUrl}/${id}`)

const putPost = (id) => http.put(`${pathUrl}/${id}`)

export default {
  getAllPost,
  getPostById,
  addPost,
  deletePost,
  putPost
}
