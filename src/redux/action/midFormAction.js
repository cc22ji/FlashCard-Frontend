import {MID_FORM_DATA} from "../constant"



  function MidFormAction(data,grpIdx){
    // console.log("Mid Form Action incoming data",data,"grp idx",grpIdx)
    return{
        type : MID_FORM_DATA,
        data : data,
        grpIdx : grpIdx
    }
}


export default MidFormAction;