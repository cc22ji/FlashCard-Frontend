import { UPDATE_DATA} from "../constant"



  function UpdateAction(data){
    // console.log("Main Form Action incoming data",data)
    return{
        type :  UPDATE_DATA,
        data : data
    }
}


export default UpdateAction;