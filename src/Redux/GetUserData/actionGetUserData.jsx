import { EDIT_USERDATA_SUCCESS, GET_USERDATA_SUCCESS } from "./type"

export const getUserDataSuccess = data => {
    return {
        type: GET_USERDATA_SUCCESS,
        payload: data
    }
}

export const editUserDataSuccess = data => {
    return {
        type: EDIT_USERDATA_SUCCESS,
        payload: data
    }
}

export const getUserData = (token, checkbox) => {
    
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        .then(response => response.json())
        .then(data => {
            checkbox && localStorage.setItem('userData', JSON.stringify(data.body));
            dispatch(getUserDataSuccess(data.body))
        })
        .catch(error => console.log(error))
    }
}

export const editUserData = (token, user) => {

    return (dispatch) => {
        
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('userData', JSON.stringify(data.body));
            dispatch(editUserDataSuccess(data.body))
        })
        .catch(error => console.log(error))
    }
}