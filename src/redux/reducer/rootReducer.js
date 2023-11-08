import FormReducer from "./reducer";
import DeleteReducer from "./DeleteReducer";
import { combineReducers } from "redux";
import UpdateReducer from "./updateReducer"

combineReducers({
    FormReducer,
    DeleteReducer,
    
    UpdateReducer
})

export default combineReducers;