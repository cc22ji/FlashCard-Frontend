import Card from "../components/pageTwo/card";
import { connect } from "react-redux";


const storeSeJana = state=>{
    return { Data : state}
}


const StoreMeAna = dispatch=>({
    // ShowToHeaderSection : data=>dispatch(Action(data))
});

export default connect(storeSeJana,StoreMeAna)(Card);
// export default Card