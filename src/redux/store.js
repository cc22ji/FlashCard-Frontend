import { createStore } from "redux";
import reducer from "./reducer"

const Store = createStore(reducer);

console.log("Store data" ,Store)

export default Store;