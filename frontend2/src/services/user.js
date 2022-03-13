import http from '../http'

const pathUrl = '/auth'

const deleteUser = () => http.delete(`${pathUrl}/delete_user`)

const putUser = (putUser) => http.put(`${pathUrl}/put_user`, putUser)

const putPass = (putPassword) => http.put(`${pathUrl}/put_user`, putPassword)

const getUser = () => http.get(`${pathUrl}/get_user`)

export default {
  deleteUser,
  putUser,
  putPass,
  getUser
}
