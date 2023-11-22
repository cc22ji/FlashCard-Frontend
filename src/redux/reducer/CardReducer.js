import {UPDATE_DATA} from "../constant"


function CardReducer(state=[],UpdateAction){
    switch(UpdateAction.type){
        case UPDATE_DATA : 
    //    console.log("main form reducer data ",MainFormAction)
         
            return[
                ...state,
                
                UpdateAction.data
            ]
        
        default :
            return state
    }
};

export default CardReducer;