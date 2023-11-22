import {MID_FORM_DATA} from "../constant"




function MidFormReducer(state=[],MidFormAction){
    switch(MidFormAction.type){
        case MID_FORM_DATA : 
    //    console.log("mid form reducer data ", MidFormAction)
         return[...state , MidFormAction.data]
         
                
            
        default :
            return state
    }
}; 

export default MidFormReducer;