import {MAIN_FORM_DATA} from "../constant"


function MainFormReducer(state=[],MainFormAction){
    switch(MainFormAction.type){
        case MAIN_FORM_DATA : 
    //    console.log("main form reducer data ",MainFormAction)
         
            return[
                ...state,
                
                MainFormAction.data
            ]
        
        default :
            return state
    }
};

export default MainFormReducer;
