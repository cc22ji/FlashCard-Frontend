
// import mata from "../../images/mata.jpg"
// import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";
// import { useState } from "react";


// function CradDetails(props) {
//   // console.log("card details page",props)
//   const TotalForm = props.Data.length;
//   const [currentSlide, setCurrentSlide] = useState(0);

//   function handlePrevSlide(){
//     setCurrentSlide((prevSlide) => (prevSlide + TotalForm - 1) % TotalForm);
//   }

//   function handlefrwdSlide(){
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % TotalForm );
//   }
//   return (
//   //   (props.Data.length==0)?null:props.Data.map((items)=>
    
//      <div className="">
    
//      <div class=" lg:w-full flex-grow lg:flex ">
//  {/* Image render here */}
//    <div class="h-48  lg:h-auto bg-white p-4 lg:w-48  bg-cover rounded-t  lg:rounded-l text-center overflow-hidden flex-shrink-0 ">
//      <img src={mata} className="w-auto sm:w-auto h-48 sm:h-48 lg:h-auto lg:w-48" />
//    </div>
 
//  {/* description term render div here */}
//      <div class=" p-2  w-full flex flex-col bg-white">
//        <p class="text-gray-700 rounded-none text-base lg:h-48  ">  
//        {props.Data[currentSlide]["enterDefination"]}
//        </p>
//      </div>
 
//  </div> 
//  {/* downward backward forward Icon added */}
//          <div class="w-full flex place-items-center justify-center mb-4 bg-gray-400">
//             <button><VscChevronLeft className="mr-8 md:mr-16" onClick={handlePrevSlide}/></button>
//              <p className="text-center">Card no</p>
//              {/* <a href="#"> */}
//              <button><VscChevronRight className="ml-8 md:ml-16" onClick={handlefrwdSlide}/></button>
//              {/* </a> */}
//          </div>
 
//      </div>
   
   
//    )
//   // )
// }

// export default CradDetails;



//  // apply condition as initially data is null
//  (props.Data.length===0)?null:
    
//  <div className="">

//  <div class=" lg:w-full flex-grow lg:flex ">
// {/* Image render here */}
// <div class="h-48  lg:h-auto bg-white p-4 lg:w-48  bg-cover rounded-t  lg:rounded-l text-center overflow-hidden flex-shrink-0 ">
//  <img src={mata} className="w-auto sm:w-auto h-48 sm:h-48 lg:h-auto lg:w-48" />
// </div>

// {/* description term render div here */}
//  <div class=" p-2  w-full flex flex-col bg-white">
//    <p class="text-gray-700 rounded-none text-base lg:h-48  ">  
//    {props.Data[0]["enterDefination"]}
//    </p>
//  </div>

// </div> 
// {/* downward backward forward Icon added */}
//      <div class="w-full flex place-items-center justify-center mb-4 bg-gray-400">
//          <a href="#"><VscChevronLeft className="mr-8 md:mr-16"/></a>
//          <p className="text-center">Card no</p>
//          <a href="#">
//          <VscChevronRight className="ml-8 md:ml-16"/>
//          </a>
//      </div>

//  </div>



// card page copieed

<div className="flex justify-around flex-wrap ">
      
{
//   (props.Data.MainForm.length===0)?null:
  // (props.Data.length===6)?
  props.Data.MainForm.map((items,index)=>
  
  <div className="flex justify-around flex-wrap  ml-">

    <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
       <div class=" rounded  p-4 flex  bg-sky-700  ">
         <div>
  
             {/* for round pic anf flex content name & cards no */}
          <div className="flex pt-4 pl-2 mb-6"> 
             <img class=" w-12 h-12 rounded-full mr-4 " src={items[0].img?items[0].img:null} alt="Avatar"/>
             <div>
               <p class="text-black leading-none font-bold text-lg mt-1">
                 {/* {props.Data[0]["groupName"]} */}
                 {items[0].groupName}
               </p>
               <p class="text-black mt-1 w- h-3 ml-1"> Card {items.length-1}</p>
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


  )
}
</div>