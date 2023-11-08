import {FORM_DATA} from "../constant"



  function action(data){
    // console.log("Form Action incoming data",data)
    return{
        type : FORM_DATA,
        data : data
    }
}


export default action;