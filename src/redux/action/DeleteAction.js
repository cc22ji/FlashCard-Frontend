import { DELETE_DATA } from "../constant"

function DeleteAction(data_Idx){
    // console.log("Delete Action incoming data",data_Id)
    return{
        type : DELETE_DATA,
        data_Idx : data_Idx
    }
}

export default DeleteAction;