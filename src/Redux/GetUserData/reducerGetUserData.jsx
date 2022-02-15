import { EDIT_USERDATA_SUCCESS, GET_USERDATA_SUCCESS } from "./type"

const initialStateUserData = {
    firstName: '',
    lastName: '',
    id: '',
    email: ''
}

const reducerGetUserData = (state = initialStateUserData, action) => {
    switch (action.type) {
        case GET_USERDATA_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                id: action.payload.id
            }
        case EDIT_USERDATA_SUCCESS:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
            
        default: return state
    }
}

export default reducerGetUserData