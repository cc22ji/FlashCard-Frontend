import RenderForm from "../components/pageOne/renderForm";
import { connect } from "react-redux";


const storeSeJana = state=>{
    return { Data : state}
}


const StoreMeAna = dispatch=>({
    // ShowToHeaderSection : data=>dispatch(Action(data))
});

export default connect(storeSeJana,StoreMeAna)(RenderForm);


// export default RenderForm;