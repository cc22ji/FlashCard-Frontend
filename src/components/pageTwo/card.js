
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import UpdateAction from "../../redux/action/CardAction";
import React, { useState } from 'react'




function Card(props) {
  console.log("card page",props) //4
  // console.log("card page",props.Data.MainForm[0].length)
  const [cardHandle, setCardHandle] = useState(6);
 const Naviagte =  useNavigate()
 const current_index = props.Data.CardIndex.length-1
 const idxValue = props.Data.CardIndex[current_index]

 function ViewCardHandler(index){
  Naviagte("/details")
  props.addDynamicCardIndex(index)
  // console.log("dynamic index value",index)
}

const showAllcard = () => {
  setCardHandle(props.Data.MainForm.length);
}


  return ( 
    <div>
    <div className="flex justify-around flex-wrap ">
      
        {
          // (props.Data.MainForm.length===0)?null:
          // (props.Data.length===6)?
          props.Data.MainForm.map((items,index)=>{
            return(
              index<cardHandle?
              <div className="flex justify-around flex-wrap  ml-">

              <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
                 <div class=" rounded  p-4 flex  bg-sky-700  ">
                   <div>
            
                       {/* for round pic anf flex content name & cards no */}
                    <div className="flex pt-4 pl-2 mb-6 overflow-hidden"> 
                       <img class=" w-12 h-12 rounded-full mr-4 " src={items[0].img?items[0].img:null} alt="Group Image"/>
                       <div>
                         <p class="text-black leading-none font-bold text-lg mt-1 ">
                           {/* {props.Data[0]["groupName"]} */}
                           {items[0].groupName}
                         </p>
                         <p class="text-black mt-1 w- h-3 ml-1"> Card {items.length-2}</p>
                       </div>
                     </div>
          
                     {/* for description */}
                     <div class="mb-8 pr-1 md:pr-0">
                       <p class="text-black text-base"> 
                       {/* {props.Data[0]["addDescription"]} */}
                       {items[0].groupDescription}
                       </p>
                     </div>
                   
            
  
                     {/* for view card button */}
                     <div className="w-full flex justify-evenly mt-4">
                       <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
                       onClick={() => ViewCardHandler(index)} >
                         <pre>view Cards</pre>
                       </button>
                    </div>
                   </div>
                 </div>
               </div>   
            </div>
  
  
              :null
            )
          }
          
       
          )
        }
    </div>
    <div className='text-right pb-11 px-5' style={cardHandle < 7 ? { display: 'block' } : { display: 'none' }}>
                {props.Data.MainForm.length ==0 ?
                    <div className='font-semibold text-white '>You have not created any Card</div> :
                    props.Data.MainForm.length >6 ?
                    <button className='text-white font-bold'
                        onClick={showAllcard}>
                        See all
                    </button>: null
                }
            </div>
    </div>
  );
}


const storeSeJana = state=>{
  return { Data : state}
}


const StoreMeAna = dispatch=>({
  addDynamicCardIndex: data=>dispatch(UpdateAction(data))
});

export default connect(storeSeJana,StoreMeAna)(Card);





