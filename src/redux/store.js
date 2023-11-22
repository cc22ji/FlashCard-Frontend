import { createStore } from "redux";
import reducer from "../redux/reducer/reducer"
import combineReducers from "../redux/reducer/rootReducer"
import MainFormReducer from "./reducer/mainFormReducer";
import rootReducer from "../redux/reducer/rootReducer";
import CardReducer from "./reducer/CardReducer";

const Store = createStore(rootReducer);

// console.log("Store data" ,Store)

export default Store;