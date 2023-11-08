import RenderForm from "../components/pageOne/renderForm";
import { connect } from "react-redux";
import DeleteAction from "../redux/action/DeleteAction"


const storeSeJana = state=>{
    return { Data : state}
}


const StoreMeAna = dispatch=>({
    AddDeleteId : data_Id=>dispatch(DeleteAction(data_Id))
});

export default connect(storeSeJana,StoreMeAna)(RenderForm);


// export default RenderForm;