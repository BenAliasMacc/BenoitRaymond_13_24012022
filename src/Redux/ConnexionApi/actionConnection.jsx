import { CONNEXION_API_FAILED, CONNEXION_API_SUCCESS, SIGN_OUT } from "./type"

export const connexionApiSuccess = data => {
    return {
        type: CONNEXION_API_SUCCESS,
        payload: data
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

export const apiCall = user => {

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
            dispatch(connexionApiSuccess(data.body.token))
        })
        .catch(error => dispatch(connexionApiFailed(error)))
    }
}