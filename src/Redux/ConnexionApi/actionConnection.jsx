import { CONNEXION_API_FAILED, CONNEXION_API_SUCCESS, SIGN_OUT } from "./type"

export const connexionApiSuccess = (token, status) => {
    return {
        type: CONNEXION_API_SUCCESS,
        payload: {token: token, status: status}
    }
}

export const connexionApiFailed = error => {
    return {
        type: CONNEXION_API_FAILED,
        payload: error
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const apiCall = (user, checkbox) => {
    
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            checkbox && localStorage.setItem('connexion', JSON.stringify({token: data.body.token, status: data.status}));
            dispatch(connexionApiSuccess(data.body.token, data.status));
        })
        .catch(error => dispatch(connexionApiFailed(error)))
    }
}