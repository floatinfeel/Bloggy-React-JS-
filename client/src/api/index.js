import axios from 'axios'

const url = 'http://localhost:3000'

export const readData = ()=> axios.get(url)
export const createData = (newData)=> axios.post(url, newData)
export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData)
export const deleteData = (id) => axios.delete(`${url}/${id}`)
export const search = () => axios.get(`${url}/search`)