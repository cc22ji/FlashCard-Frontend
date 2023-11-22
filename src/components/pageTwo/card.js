import pic from "../../images/white2.jpg";
import mata from "../../images/mata.jpg"
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import UpdateAction from "../../redux/action/CardAction";




function Card(props) {
  console.log("card page",props) //4

 const Naviagte =  useNavigate()
 const current_index = props.Data.CardIndex.length-1
 const idxValue = props.Data.CardIndex[current_index]

 function ViewCardHandler(index){
  Naviagte("/details")
  props.addDynamicCardIndex(index)
  // console.log("dynamic index value",index)
}
// let count = 0, counts =[]
// props.Data.MidForm.map((items)=>{
//    if(items.b === props.Data.MainForm[idxValue-1].additionalData.index.idx-1){
//        count = count + 1;
//     }  
//   })
  // console.log("card page count",count)
  // counts.push(count)
  // console.log("card page counts",counts)

  return ( 
    <div className="flex justify-around flex-wrap ">
      
        {
          (props.Data.MainForm.length===0)?null:
          // (props.Data.length===6)?
          props.Data.MainForm.map((items)=>
          
          <div className="flex justify-around flex-wrap  ml-">

            <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
               <div class=" rounded  p-4 flex  bg-sky-700  ">
                 <div>
          
                     {/* for round pic anf flex content name & cards no */}
                  <div className="flex pt-4 pl-2 mb-6"> 
                     <img class=" w-12 h-12 rounded-full mr-4 " src={mata} alt="Avatar"/>
                     <div>
                       <p class="text-black leading-none font-bold text-lg mt-1">
                         {/* {props.Data[0]["groupName"]} */}
                         {items.groupName}
                       </p>
                       <p class="text-black mt-1 w- h-3 ml-1"> Card {}</p>
                     </div>
                   </div>
        
                   {/* for description */}
                   <div class="mb-8 pr-1 md:pr-0">
                     <p class="text-black text-base"> 
                     {/* {props.Data[0]["addDescription"]} */}
                     {items.addDescription}
                     </p>
                   </div>
                 
          

                   {/* for view card button */}
                   <div className="w-full flex justify-evenly mt-4">
                     <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
                     onClick={() => ViewCardHandler(items.additionalData.index.idx)} >
                       <pre>view Cards</pre>
                     </button>
                  </div>
                 </div>
               </div>
             </div>   
          </div>


          )
        }
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





