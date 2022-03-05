import http from '../http'

const pathUrl = 'comments'

const comments = (id) => http.get(`/posts/${id}/${pathUrl}`)

const addComment = (comment, id) => http.post(`/posts/${id}/${pathUrl}`, comment)

const deleteComment = (id) => http.delete(`/${pathUrl}/${id}`)

export default {
  comments,
  addComment,
  deleteComment
}
