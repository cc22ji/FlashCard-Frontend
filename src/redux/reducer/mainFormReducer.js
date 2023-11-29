import {MAIN_FORM_DATA} from "../constant"

const inputlocal = localStorage.getItem('form-input');

const initialState = {
    stateData: inputlocal ? JSON.parse(inputlocal) : []
}

function MainFormReducer(state=initialState,MainFormAction){
    switch(MainFormAction.type){
        
        case MAIN_FORM_DATA : 
        localStorage.setItem('form-input', JSON.stringify([...state.stateData, MainFormAction.data]));
         return{
            ...state,  
            stateData : [...state.stateData ,MainFormAction.data] 
        }

        default :
            return state
    }
};

export default MainFormReducer;
