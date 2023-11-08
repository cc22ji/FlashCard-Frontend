import AssembleThree from "../components/pageTree/AssembleThree";


import { connect } from "react-redux";


const storeSeJana = state=>{
    return { Data : state}
}


const StoreMeAna = dispatch=>({
    // ShowToHeaderSection : data=>dispatch(Action(data))
});

export default connect(storeSeJana,StoreMeAna)(AssembleThree);

// export default AssembleThree;