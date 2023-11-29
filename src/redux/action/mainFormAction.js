import {MAIN_FORM_DATA} from "../constant"

  function MainFormAction(data){
    return{
        type : MAIN_FORM_DATA,
        data : data
    }
}

export default MainFormAction;