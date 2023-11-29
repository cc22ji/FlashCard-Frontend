import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  //find the refernce from card page through index.
  const current_index = props.Data.CardIndex.length - 1;
  const idxValue = props.Data.CardIndex[current_index];

  return props.Data.MainForm.stateData.length === 0 ? null : (
    <div className="w-full  mb-4 bg-gray-500">
      {/* use icon here */}
      <div className="flex p-3 mb-0 pb-1  place-items-center">
        <Link to="/card">
          <FiArrowLeft />
        </Link>
        {/* here we put group name withthe reference from card page */}
        <p className="pl-4 uppercase  overflow-hidden text-sm font-semibold">
          {props.Data.MainForm.stateData[idxValue][0].groupName}
        </p>
      </div>

      {/* here we put group description withthe reference from card page */}
      <div>
        <p className="pl-12 pr-2 pb-4 ">
          {props.Data.MainForm.stateData[idxValue][0].groupDescription}
        </p>
      </div>
    </div>
  );
}

//through  below this we connect our form page to redux action page
const storeSeJana = (state) => {
  return { Data: state };
};

const StoreMeAna = (dispatch) => ({});

export default connect(storeSeJana, StoreMeAna)(Header);
