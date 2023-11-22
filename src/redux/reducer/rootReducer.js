import FormReducer from "./reducer";
import DeleteReducer from "./DeleteReducer";
import { combineReducers } from "redux";
import UpdateReducer from "./updateReducer"
import MainFormReducer from "./mainFormReducer";
import MidFormReducer from "./midFormReducer";
import CardReducer from "./CardReducer";


const rootReducer = combineReducers({
    MainForm:MainFormReducer,
    MidForm:MidFormReducer,
    CardIndex : CardReducer,
    // FormReducer,
    // DeleteReducer,
    // UpdateReducer
})

export default rootReducer;