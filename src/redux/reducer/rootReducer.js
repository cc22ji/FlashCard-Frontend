
import { combineReducers } from "redux";
import MainFormReducer from "./mainFormReducer";
import CardReducer from "./CardReducer";


const rootReducer = combineReducers({
    MainForm : MainFormReducer,
    CardIndex : CardReducer,
})

export default rootReducer;