import {UPDATE_DATA} from "../constant"


function CardReducer(state=[],UpdateAction){
    switch(UpdateAction.type){
        case UPDATE_DATA : 
        // localStorage.setItem('card-input', JSON.stringify([...state,UpdateAction.data]));
         
            return[
                ...state,
                
                UpdateAction.data
            ]
        
        default :
            return state
    }
};

export default CardReducer;