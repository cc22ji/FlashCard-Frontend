import {MAIN_FORM_DATA} from "../constant"
import { DELETE_DATA } from "../constant";


function MainFormReducer(state=[],MainFormAction){
    switch(MainFormAction.type){
        
        case MAIN_FORM_DATA : 
         return[...state, MainFormAction.data ]

        // case DELETE_DATA :
        //     let data = state.filter((item, index) => index !== action.data_Idx);
        //     return[...state , ...data]
        
        default :
            return state
    }
};

export default MainFormReducer;
