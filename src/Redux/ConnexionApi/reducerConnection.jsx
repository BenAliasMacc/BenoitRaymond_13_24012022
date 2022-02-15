import { CONNEXION_API_FAILED, CONNEXION_API_SUCCESS, SIGN_OUT } from "./type"

const initialStateConnection = {
    token: '',
    status: '',
    error: false
}

const reducerConnection = (state = initialStateConnection, action) => {
    switch (action.type) {
        case CONNEXION_API_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                status: action.payload.status
            } 
        case CONNEXION_API_FAILED:
            return {
                ...state,
                error: true
            }
        case SIGN_OUT:
            return initialStateConnection
            
        default: return state
    }
}

export default reducerConnection