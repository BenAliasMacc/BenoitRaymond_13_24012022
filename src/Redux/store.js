import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import reducerConnection from "./ConnexionApi/reducerConnection";

const store = createStore(reducerConnection, applyMiddleware(thunk))

export default store