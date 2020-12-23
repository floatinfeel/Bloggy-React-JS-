
import {READ, CREATE, UPDATE, DELETE} from '../constants/actionType'
export default (locations = [], action) =>{
    switch (action.type) {
        case READ:
            return action.payload
        case CREATE:
            return [...locations, action.payload]
        case UPDATE:
            return locations.map((location) => location.id === action.payload.id ? action.payload : location)
        case DELETE:
            return locations.filter((location) => location.id !== action.payload)
        default:
            return locations
    }
}