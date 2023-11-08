import { FiArrowLeft } from "react-icons/fi";
import LinkList from "./linkList";
import CardListContainer from "../../container/cardListContainer";
import CardDetailsContainer from "../../container/cardDetailsContainer";
import { Link } from "react-router-dom";

// for middle one imported items
import mata from "../../images/mata.jpg"
import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";
import { useState } from "react";

// right side bar components
import {FiDownload,FiPrinter, } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";


function AssembleThree(props) {
  console.log("page three  component",props.Data)
  //  props.Data.map((items)=>
    // console.log("aaaaaaaaaaaaaaa",props)
  // )

  const TotalForm = props.Data.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevSlide(){
    setCurrentSlide((prevSlide) => (prevSlide + TotalForm - 1) % TotalForm);
  }

  function handlefrwdSlide(){
    setCurrentSlide((prevSlide) => (prevSlide + 1) % TotalForm );
  }

  function handleTermClick(index){
   setCurrentSlide(index)
  }
 

  return (


    (props.Data.length===0)?null:
    <div>
      <div class="flex-none lg:flex-wrap">
        <div class="w-full  mb-4 bg-gray-500">

            <div className="flex p-3 mb-0 pb-1  place-items-center">
              <Link to="/card"><FiArrowLeft/></Link>
                {/* <FiArrowLeft/> */}
                { props.Data.map((items)=>
                <p className="pl-4 uppercase  text-sm font-semibold">
                {items.groupName}
                </p>
                )}
            </div>

            <div>
                <p className="pl-12 pr-2 pb-4">
                {props.Data[0]["addDescription"]}
                </p>
            </div>
        </div>







        {/* Nested component Assembly  */}
        <div class="px-4 mb-5 ">
            <div class="lg:flex -mx-2">


    {/* left sidebar  */}
                <div class="w-auto lg:w-1/5  px-2">  
                   <div class=" h-auto">
                        
                         
                          <div className="w-">
                             <nav class="flex w-full lg:max-w-xs rounded items-center flex-wrap bg-teal-500 pt-4 px-2 ml- mr-24 mb-5 lg:mb-0 sm:mb-4 ">
                             
                        
                         
                         <div class="w-full block flex-grow lg:flex lg:items-center  lg:visible">
                           <div class="text-sm lg:flex-grow">
                       
                       
                           <div className="mb-2">
                           <h1 className="mb-1 px-1 block uppercase  text-sm font-medium">CardList</h1>
                           <hr></hr>
                         </div>
                       
                                 <div>
                                    <ul className="pl-2 pb-2">
                                      {
                                        props.Data.map((items)=>
                                     <li class="mb-2">
                                     <button class="text-black text-base hover:text-white " onClick={() => handleTermClick(items.additionalData.index.idx)}>
                                      {/* <pre>Card {items.additionalData.index.idx}</pre> */}
                                       <p>{items.groupName}</p>
                                     </button>
                                     </li>
                                      ) }
                                    </ul>
                                 </div>
                          </div>
                       
                           <div>
                            
                           </div>
                         </div>
                       
                       
                       
                       
                       </nav>
                          </div>
                        
                   
                    </div>
               </div>
{/* middle container having image and defination data  */}
                   <div class="w-auto lg:w-3/5 px-2  lg:mb-0 mb-5 sm:mb-4 ">
                       <div class=" h-auto">
                       <div className="">
    
    <div class=" lg:w-full flex-grow lg:flex ">
{/* Image render here */}
  <div class="h-48  lg:h-auto bg-white p-4 lg:w-48  bg-cover rounded-t  lg:rounded-l text-center overflow-hidden flex-shrink-0 ">
    <img src={mata} className="w-auto sm:w-auto h-48 sm:h-48 lg:h-auto lg:w-48" />
  </div>

{/* description term render div here */}
    <div class=" p-2  w-full flex flex-col bg-white">
      <p class="text-gray-700 rounded-none text-base lg:h-48  ">  
      {props.Data[currentSlide]["enterDefination"]}
      </p>
    </div>

</div> 
{/* downward backward forward Icon added */}
        <div class="w-full flex place-items-center justify-center mb-4 bg-gray-400">
           <button><VscChevronLeft className="mr-8 md:mr-16" onClick={handlePrevSlide}/></button>
            <p className="text-center">Card no</p>
            {/* <a href="#"> */}
            <button><VscChevronRight className="ml-8 md:ml-16" onClick={handlefrwdSlide}/></button>
            {/* </a> */}
        </div>

    </div>
                        </div>
                   </div>


                   {/* right sidebar container */}

               <div class="w-auto lg:w-1/5  mr-1 ml- sm:ml-  ">
                    <div class=" h-auto">
                    <div className="">
            <div class="w-full  rounded ">
      <div class="px- py-">
        <div>
          <ul className="mx-2 mt-">
            <li class="mb-2 ">
            <button class=" place-items-center lg:pr- flex group justify-center lg:justify-evenly group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-center p- text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"><PiShareNetworkLight className="mr-8 lg:mr-2"/><p className="text-center pr-8 ">Share</p></button>
           </li>

           <li class="mb-2  mt-4">
            <button class="place-items-center  flex  group justify-center lg:justify-evenly group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"><FiDownload className="mr-8 lg:mr-2"/>
             <p className="mr-">Download</p></button>
           </li>

           <li class="mb-2 mt-4">
            <button class="place-items-center justify-center lg:justify-evenly flex group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur"><FiPrinter className="mr-12 lg:mr-2"/>
             <p className="mr-6 ">Print</p></button>
           </li>
          </ul>
        </div>

      </div>
    </div>
        </div>
                    </div>
              </div>
           </div>
       </div>











        {/* bottom tag div */}
       
      </div>
    </div>
  );
}
export default AssembleThree;
