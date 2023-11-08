import Card from "../components/pageTwo/card";
import { connect } from "react-redux";
import FormAction from "../redux/action/action";
import UpdateAction from "../redux/action/updateAction";


const storeSeJana = state=>{
    return { Data : state}
}


const StoreMeAna = dispatch=>({
    addFromCard: data=>dispatch(UpdateAction(data))
});

export default connect(storeSeJana,StoreMeAna)(Card);
// export default Card