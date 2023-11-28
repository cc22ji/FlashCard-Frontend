import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";




function Header(props){
    const current_index = props.Data.CardIndex.length-1
    const idxValue = props.Data.CardIndex[current_index]

    return(
        (props.Data.MainForm.length===0)?null:
        <div class="w-full  mb-4 bg-gray-500">

        <div className="flex p-3 mb-0 pb-1  place-items-center">
          <Link to="/card"><FiArrowLeft/></Link>
            <p className="pl-4 uppercase  overflow-hidden text-sm font-semibold">
            {props.Data.MainForm[idxValue][0].groupName}
            </p>
        </div>

        <div>
      <p className="pl-12 pr-2 pb-4 ">
          {props.Data.MainForm[idxValue][0].groupDescription}  
        </p> 
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