import { RiDeleteBin6Line } from "react-icons/ri";//delete  FiEdit
import { FiEdit} from "react-icons/fi";
import bike from "../../images/bike.jpg"
import mata from "../../images/mata.jpg"
import img2 from "../../images/img2.jpg"



function RenderForm(props) {
  console.log("render page",props) //props.Data[1]["key"]
  console.log("render page",props) 
  const abc = props.Data;
  
  function DeleteIcon(data_Id){
    console.log("render id",data_Id)
    props.AddDeleteId([data_Id])
  }
  
  return ( 
   <div>
   {
          // abc.length===0?null:abc.map((items)=>
     <div class="flex flex-wrap  mb-2 pb-4">

     {/* enter term div */}
           <div class="w-full  md:w-2/6 px-3 mb-6 md:mb-0 overflow-hidden break-words ">
       <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
          Term
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm">
        {/*  {props.Data[0]["enterTerm"]} */}
        {/* {items.enterTerm} */}
        {props.term}
         
         </div>
      </div>
     
     
     {/* enter defination div here */}
     <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0 overflow-hidden break-words">
       <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
          Defination
       </label>
       <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination overflow-hidden " >
       {/* {props.Data[0]["enterDefination"]} */}
       {/* {items.enterDefination} */}
         </div>
       </div>
     
     {/* image input button here */}
     <div class="w-full md:w-2/6   px-3 flex mb-2 md:mb-0 mt-5 md:mt-6 justify-evenly">
     {/* <input type="file" hidden name="image2"></input> */}
     <div class="   w-40 md:w-1/2 bg-gray-200 hover:bg-white break-words uppercase text-xs font-bold   border border-red-500 rounded h-auto md:h-12 lg:h-auto"><img src={bike} alt="/"/></div>
     {/* icon add */}
      <div className="pl-4 md:pl-0 lg:flex flex-col py-2 md:py-1 lg:py-4 justify-between ">
        <button
        //  onClick={() => DeleteIcon(items.additionalData.id)} 
         type="button"> <RiDeleteBin6Line className="mb-4 md:mb-4 lg:mb-0"/> </button>
         <FiEdit className=""/>
     </div>
     {/* icon end */}
     </div>
     </div>
     
    //  )
   }
   </div>
  );

   
}

export default RenderForm;



// /*
//    <div class="flex flex-wrap  mb-2 pb-4">

// {/* enter term div */}
// <div class="w-full  md:w-2/6 px-3 mb-6 md:mb-0 overflow-hidden break-words ">
// <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
//    Term
// </label>
// <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm">
//   {props.Data[0]["enterTerm"]}
  
//   </div>
// </div>


// {/* enter defination div here */}
// <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0 overflow-hidden break-words">
// <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
//    Defination
// </label>
// <div class=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination overflow-hidden " >
// {props.Data[0]["enterDefination"]}
//   </div>
// </div>

// {/* image input button here */}
// <div class="w-full md:w-2/6   px-3 flex mb-2 md:mb-0 mt-5 md:mt-6 justify-evenly">
// {/* <input type="file" hidden name="image2"></input> */}
// <div class="   w-40 md:w-1/2 bg-gray-200 hover:bg-white break-words uppercase text-xs font-bold   border border-red-500 rounded h-auto md:h-12 lg:h-auto"><img src={bike} alt="/"/></div>
// {/* icon add */}
// <div className="pl-4 md:pl-0 lg:flex flex-col py-2 md:py-1 lg:py-4 justify-between ">
//  <button onClick={DeleteIcon} type="button"> <RiDeleteBin6Line className="mb-4 md:mb-4 lg:mb-0"/> </button>
//   <FiEdit className=""/>
// </div>
// {/* icon end */}
// </div>
// </div>
// */