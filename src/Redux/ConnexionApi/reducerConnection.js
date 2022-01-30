import { CONNEXION_API_FAILED, CONNEXION_API_SUCCESS } from "./type"

const initialStateConnection = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: false
}

const initialStateTesy = {
    firstTest: '',
    lastTest: '',
    other: ''
}

const reducerConnection = (state = initialStateConnection, action) => {
    console.log(action);
    switch (action.type) {
        case CONNEXION_API_SUCCESS:
            return {
                ...state,
                token: action.payload
            } 
        case CONNEXION_API_FAILED:
            return {
                ...state,
                error: true
            } 
            
        default: return state
    }
}

export default reducerConnection