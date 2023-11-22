import {MAIN_FORM_DATA} from "../constant"



  function MainFormAction(data){
    // console.log("Main Form Action incoming data",data)
    return{
        type : MAIN_FORM_DATA,
        data : data
    }
}


export default MainFormAction;