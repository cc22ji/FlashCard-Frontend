import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DummyComp from "../pageTwo/dummyComp";



function Header(props){
  //  const idxValue = props.Data.CardIndex-1
    // console.log("header props 001", (props))
    // console.log("header props 002", (props))
    const current_index = props.Data.CardIndex.length-1
    const idxValue = props.Data.CardIndex[current_index]
    // console.log("idx position",current_index)
    // console.log("idx value",idxValue)
    return(
        (props.Data.MainForm.length===0)?null:
        <div class="w-full  mb-4 bg-gray-500">

        <div className="flex p-3 mb-0 pb-1  place-items-center">
          <Link to="/card"><FiArrowLeft/></Link>
            {/* <p className="pl-4 uppercase  text-sm font-semibold">
            {props.Data.MainForm[idxValue-1].groupName}
            </p> */}
             { 
      // (props.change==true) ? 
      (
      <p className="pl-4 uppercase  text-sm font-semibold  ">
        {/* {props.Data.MainForm[props.currentSlide]["groupName"]}  */}
        </p> ) 
      //   : 
      //   (<p className="pl-4 uppercase  text-sm font-semibold  ">
      //  {props.Data.MainForm[idxValue-1].groupName} </p>)
    }

        </div>

        <div>
            {/* <p className="pl-12 pr-2 pb-4">
            {props.Data.MainForm[idxValue-1].addDescription}
            </p> */}
              { 
      // (props.change==true) ? (
      <p className="pl-12 pr-2 pb-4 ">
        {/* {props.Data.MainForm[props.currentSlide]["addDescription"]}  */}
        </p> 
        // ) : 
      //   (<p className="pl-12 pr-2 pb-4 ">
      //  {props.Data.MainForm[idxValue-1].addDescription} </p>)
    }
        </div>
        
    </div>
    )
}

const storeSeJana = state=>{
    return { Data : state}
  }
  
  
  const StoreMeAna = dispatch=>({
    // addFromCard: data=>dispatch(UpdateAction(data))
  });
  
  export default connect(storeSeJana,StoreMeAna)(Header);