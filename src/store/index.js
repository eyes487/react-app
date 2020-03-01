import { createStore, combineReducers, applyMiddleware  } from "redux";
import thunk from 'redux-thunk'
import userReducer from "./userReducer";
import productReducer from "./productReducer"

const store = createStore(combineReducers({ 
    user: userReducer ,
    product: productReducer
}),applyMiddleware(thunk));

export default store;
