import FormPage from "../components/pageOne/FormPage"
import action from "../redux/action/action";
import { connect } from "react-redux";

const StoreSejana = state=>({ 
    Data:state
});

//through this below we connect our form page to redux action page 
const StoreMeAna = dispatch=>({
    addToRedux : data=>dispatch(action(data))
});


export default connect(StoreSejana,StoreMeAna)( FormPage);

// export default FormPage;