import { createStore } from "redux";

import rootReducer from "../redux/reducer/rootReducer";


const Store = createStore(rootReducer);


export default Store;