import {combineReducers,applyMiddleware} from "redux";
import {createStore} from "redux"
import {TodoReducer} from "./Todos/reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    todos:TodoReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log("state checking",store.getState());
})

