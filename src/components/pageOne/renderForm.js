import { RiDeleteBin6Line } from "react-icons/ri";//delete  FiEdit
import { FiEdit} from "react-icons/fi";

import { connect } from "react-redux";



function RenderForm(props) {
  console.log("render form data",props)
  let data = [...props.midFormDataArray]
  console.log("fuck you",data)
  

  return ( 
   <div>
    {
      // props.midFormDataArray !== null ?
      data.map((items,index)=> index==0?null:
      // (items.b===props.grpIdx)?
          
     <div class="flex flex-wrap  mb-2 pb-4">

      {/* enter term div */}
           <div class="w-full  md:w-2/6 px-3 mb-6 md:mb-0 overflow-hidden break-words ">
       <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
          Term
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm">
      { items.term}
         </div> 
      </div>
     
     
     {/* enter defination div here */}
     <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0 overflow-hidden break-words">
       <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
          Defination
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination overflow-hidden ">
       { items.defination}
         </div>
       </div>
     
     {/* image input button here */}
     <div class="w-full md:w-2/6   px-3 flex mb-2 md:mb-0 mt-5 md:mt-6 justify-evenly">
     {/* <input type="file" hidden name="image2"></input> */}
     <div class="   w-40 md:w-1/2 bg-gray-200 hover:bg-white break-words uppercase text-xs font-bold   border border-red-500 rounded h-auto md:h-12 lg:h-auto"><img 
     src={ items.img} alt="/"
     /></div>
     {/* icon add */}
      <div className="pl-4 md:pl-0 lg:flex flex-col py-2 md:py-1 lg:py-4 justify-between">
        <button
         type="button"  > <RiDeleteBin6Line className="mb-4 md:mb-4 lg:mb-0"/></button>
         <FiEdit className=""/>
     </div>
     {/* icon end */}
    </div>


    </div> 

      )
   } 
   </div>
  );
 
}


const StoreSejana = state=>({ 
  Data:state
});

//through this below we connect our form page to redux action page 
const StoreMeAna = dispatch=>({
  // MidPageDataAddedToRedux :(data)=>dispatch(DeleteAction(data_Idx))
});


export default connect(StoreSejana,StoreMeAna)(RenderForm);





//  {/* props.Data.MidForm.map((items)=>{ */}
           {/* if(items.b === props.grpIdx){ */}



              {/* } } ) */} //upar
