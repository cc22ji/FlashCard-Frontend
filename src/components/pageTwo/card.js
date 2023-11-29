import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import UpdateAction from "../../redux/action/CardAction";
import React, { useState } from "react";

function Card(props) {
  const [cardHandle, setCardHandle] = useState(6);
  const Naviagte = useNavigate();

  //here onclick he index value of particular card is added to redux which further use for reference for page three components
  function ViewCardHandler(index) {
    Naviagte("/details");
    props.addDynamicCardIndex(index);
  }

  // function for showall term here we set full length of datas
  const showAllcard = () => {
    setCardHandle(props.Data.MainForm.length);
  };

  return (
    <div>
      <div className="flex justify-around flex-wrap ">
        {props.Data.MainForm.stateData.map((items, index) => {
          return index < cardHandle ? (
            <div className="flex justify-around flex-wrap" key={index}>
              <div className=" w-56 md:w-64 h-auto justify-center  overflow-hidden m-3 ">
                <div className=" rounded  p-4 flex  bg-sky-700  ">
                  <div>
                    {/* for round pic anf flex content name & cards no */}
                    <div className="flex pt-4 pl-2 mb-6 overflow-hidden">
                      <img
                        className=" w-12 h-12 rounded-full mr-4 "
                        src={items[0].img ? items[0].img : null}
                        alt="Img"
                      />
                      <div>
                        <p className="text-black leading-none font-bold text-lg mt-1 ">
                          {items[0].groupName}
                        </p>
                        <p className="text-black mt-1 w- h-3 ml-1">
                          {" "}
                          Card {items.length - 2}
                        </p>
                      </div>
                    </div>

                    {/* for description */}
                    <div className="mb-8 pr-1 md:pr-0">
                      <p className="text-black text-base">
                        {items[0].groupDescription}
                      </p>
                    </div>

                    {/* for view card button */}
                    <div className="w-full flex justify-evenly mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={() => ViewCardHandler(index)}
                      >
                        <pre>view Cards</pre>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      {/* here we apply condition. if card is less then 6 then we show cards and if it is greater thrn six then cards which is greater than six is show after click on see all. Again if no card is here then another block is render */}
      <div
        className="text-right pb-11 px-5"
        style={cardHandle < 7 ? { display: "block" } : { display: "none" }}
      >
        {props.Data.MainForm.stateData.length == 0 ? (
          <div className="font-semibold text-white ">
            You have not created any Card
          </div>
        ) : props.Data.MainForm.stateData.length > 6 ? (
          <button className="text-white font-bold" onClick={showAllcard}>
            See all
          </button>
        ) : null}
      </div>
    </div>
  );
}





//through  below this we connect our form page to redux action page
const storeSeJana = (state) => {
  return { Data: state };
};

const StoreMeAna = (dispatch) => ({
  addDynamicCardIndex: (data) => dispatch(UpdateAction(data)),
});

export default connect(storeSeJana, StoreMeAna)(Card);
