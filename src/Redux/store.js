import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import reducerConnection from "./ConnexionApi/reducerConnection";
import reducerGetUserData from "./GetUserData/reducerGetUserData";

const rootReducer = combineReducers({
    connection: reducerConnection,
    userData: reducerGetUserData
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store