import { DELETE_DATA } from "../constant"

function DeleteAction(data_Id){
    //console.log("Delete Action incoming data",data_Id)
    return{
        type : DELETE_DATA,
        data_Id : data_Id
    }
}

export default DeleteAction;