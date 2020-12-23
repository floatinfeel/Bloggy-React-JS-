import * as api from '../api'
import {READ, CREATE, UPDATE, DELETE} from '../constants/actionType'

// ex action creators 
// const getPosts = () =>{
//     const action = {type: 'READ', payload: []}

//     return action
// }

//action creators with thunk
export const readData = () => async (dispatch) =>{
    try {
        //get data from responde fetch api
        const {data} = await api.readData()

        //action
        dispatch({type: READ, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createData = (location) => async (dispatch) =>{
    try {
        const {data} = await api.createData(location)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateData = (id, location) => async (dispatch) =>{
    try {
        const {data} = await api.updateData(id, location)
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteData = (id) => async (dispatch) =>{
    try {
        await api.deleteData(id)
        dispatch({type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}
