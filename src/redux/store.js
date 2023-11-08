import { createStore } from "redux";
import reducer from "../redux/reducer/reducer"
import combineReducers from "../redux/reducer/rootReducer"
import DeleteReducer from "./reducer/DeleteReducer";

const Store = createStore(reducer);

// console.log("Store data" ,Store)

export default Store;