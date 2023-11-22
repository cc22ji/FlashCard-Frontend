import { RiDeleteBin6Line } from "react-icons/ri";//delete  FiEdit
import { FiEdit} from "react-icons/fi";
import bike from "../../images/bike.jpg"
import mata from "../../images/mata.jpg"
import img2 from "../../images/img2.jpg"
import { useRef } from "react";
import { connect } from "react-redux";





function RenderForm(props) {
  console.log("render form data hai ye 1",props)
  // console.log("render form data hai ye2",props.Data.MidForm)
  // console.log("render form data hai ye3",props.Data.MidForm[0])
  // console.log("render form data hai ye4",props.Data.MidForm[0].b)
  // console.log("render form data hai ye5",props.Data.MidForm[0].card_data)
  // console.log("render form data hai ye6",props.Data.MidForm[0].card_data.term)
  // console.log("render form data hai ye 7",props.grpIdx)
  
  // props.Data.MidForm.map((items)=>{
  //   if(items.b === props.grpIdx){
  //     console.log("reaching",items.card_data.term)
  //   }
  // })
//  let count =0
//   props.Data.MidForm.map((items)=>{
//       if(items.b === props.Data.MainForm[0].additionalData.index.idx-1){
//         count = count + 1;
//       }  
//       console.log("count 1",count)
//     })
//     console.log("count 2",count)
    // let counts = []
    // counts.push(count)
    // console.log("count",count)
    // console.log("counts",counts)
  
  return ( 
   <div>
    {
      props.Data.MidForm.map((items)=>
      (items.b===props.grpIdx)?
          
     <div class="flex flex-wrap  mb-2 pb-4">

      {/* enter term div */}
           <div class="w-full  md:w-2/6 px-3 mb-6 md:mb-0 overflow-hidden break-words ">
       <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
          Term
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm">
      { items.card_data.term}
         </div> 
      </div>
     
     
     {/* enter defination div here */}
     <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0 overflow-hidden break-words">
       <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
          Defination
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination overflow-hidden ">
       {/* {props.Data[0]["enterDefination"]} */}
       {/* {items.enterDefination} */}
       { items.card_data.defination}
         </div>
       </div>
     
     {/* image input button here */}
     <div class="w-full md:w-2/6   px-3 flex mb-2 md:mb-0 mt-5 md:mt-6 justify-evenly">
     {/* <input type="file" hidden name="image2"></input> */}
     <div class="   w-40 md:w-1/2 bg-gray-200 hover:bg-white break-words uppercase text-xs font-bold   border border-red-500 rounded h-auto md:h-12 lg:h-auto"><img 
     src={ items.card_data.img} alt="/"
     /></div>
     {/* icon add */}
      <div className="pl-4 md:pl-0 lg:flex flex-col py-2 md:py-1 lg:py-4 justify-between">
        <button
        //  onClick={() => DeleteIcon(items.additionalData.id)}
         
         type="button"> <RiDeleteBin6Line className="mb-4 md:mb-4 lg:mb-0"/> </button>
         <FiEdit className=""/>
     </div>
     {/* icon end */}
    </div>


    </div> 


      :null)
   } 
  



   </div>






  );
 
}


const StoreSejana = state=>({ 
  Data:state
});

//through this below we connect our form page to redux action page 
const StoreMeAna = dispatch=>({
  // MidPageDataAddedToRedux :(data,grpIdx)=>dispatch(MidFormAction(data,grpIdx))
});


export default connect(StoreSejana,StoreMeAna)(RenderForm);





//  {/* props.Data.MidForm.map((items)=>{ */}
           {/* if(items.b === props.grpIdx){ */}



              {/* } } ) */} //upar
