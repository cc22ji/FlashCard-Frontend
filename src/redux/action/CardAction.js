import { UPDATE_DATA} from "../constant"

  function UpdateAction(data){
    return{
        type :  UPDATE_DATA,
        data : data
    }
}

export default UpdateAction;