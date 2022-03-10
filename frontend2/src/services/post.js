
import http from '../http'

const pathUrl = '/posts'

const getAllPost = () => http.get(pathUrl)

const addPost = (data) => http.post(pathUrl, data)

const getPostById = (id) => http.get(`${pathUrl}/${id}`)

const deletePost = (id) => http.delete(`${pathUrl}/${id}`)

const putPost = (id, data) => http.put(`${pathUrl}/${id}`, data)

export default {
  getAllPost,
  getPostById,
  addPost,
  deletePost,
  putPost
}
