import {FORM_DATA} from "./constant"


function FormAction(data){
    console.log("Action incoming data",data)
    return{
        type : FORM_DATA,
        data : data
    }
}

export default FormAction;