import {FORM_DATA} from "./constant"

function FormReducer(state=[],FormAction){
    console.log("reducer incoming data",FormAction)

    switch(FormAction.type){
        case FORM_DATA :
            return[
                ...state,
                FormAction.data
            ]
        default :
            return state
    }
};

export default FormReducer;
