
import Header from "./Header";
import { connect } from "react-redux";

// imported for middle box items
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useState } from "react";

// right side bar components
import { FiDownload, FiPrinter } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";



function AssembleThree(props) {
  
  //to find the index of card reference copming from card page
  const current_index = props.Data.CardIndex.length - 1;
  const idxValue = props.Data.CardIndex[current_index];

  //to find the total no of cards of particular card
  const TotalForm = props.Data.MainForm.stateData[idxValue].length - 1;

  const [currentSlide, setCurrentSlide] = useState(2);
  const [change, setChange] = useState(false);


  // its use to go back to previous slide using icons
  function handlePrevSlide() {
    console.log("page three data",props)
    if (currentSlide > 2) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    } else {
      setCurrentSlide(TotalForm);
    }
    console.log("prevslide", currentSlide);
  }

  // its use to go back to previous slide using icons
  function handlefrwdSlide() {
    if (currentSlide < TotalForm) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(2);
    }
    console.log("frwdslide", currentSlide);
  }

  //apply on card items list so we get correct refernce to render on middle box by setting their indexes
  function handleTermClick(index) {
    setCurrentSlide(index);
    setChange(true);
  }

  return props.Data.MainForm.stateData[0].length <2 ? null : (
    <div>
      <div className="flex-none lg:flex-wrap">
        {/* calling header consist group name and their description */}
        <Header change={change} currentSlide={currentSlide} />

        {/* Nested component Assembly  */}
        <div className="px-4 mb-5 ">
          <div className="lg:flex -mx-2">
            {/* left sidebar  */}
            <div className="w-auto lg:w-1/5  px-2 ">
              <div className=" h-auto">
                
                  <nav className="flex w-full lg:max-w-xs rounded items-center flex-wrap bg-teal-500 pt-4 px-2 ml-    mr-24 mb-5 lg:mb-0 sm:mb-4  ">
                    <div className="w-full block flex-grow lg:flex lg:items-center overflow-hidden  lg:visible">
                      <div className="text-sm lg:flex-grow">
                        <div className="mb-2">
                          <h1 className="mb-1 px-1 block uppercase  text-sm font-medium">
                            CardList
                          </h1>
                          <hr></hr>
                        </div>

                        <div>
                          <ul className="pl-2 pb-2 overflow-hidden ">
                            {props.Data.MainForm.stateData[idxValue].map((items, index) =>
                              index === 0 ? null : index === 1 ? null : (
                                <li className="mb-2"  key={index}>
                                  <button
                                    className="text-black text-base hover:text-white overflow-hidden "
                                    onClick={() => handleTermClick(index)}>
                                    <p className="overflow-hidden">{items.term}</p>
                                  </button>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </nav>                
              </div>
            </div>

            {/* middle container having image and defination data  */}
            <div className="w-full lg:w-3/5 px-2  lg:mb-0 mb-5 sm:mb-4 ">
              <div className=" h-auto ">
                
                  <div className="block md:flex lg:w-full flex-grow lg:flex   ">
                    {/* Image render here */}
                    <div className="h-48  lg:h-auto bg-white p-4 lg:w-40  bg-cover rounded-t  lg:rounded-tl-lg text-center overflow-hidden flex-shrink-0  ">
                      <img
                        src={props.Data.MainForm.stateData[idxValue][currentSlide]?props.Data.MainForm.stateData[idxValue][currentSlide].img:null}
                        className="w-auto  sm:w-auto h-48 sm:h-48 lg:h-auto lg:w-48 pb-8 lg:pb-0"/>
                    </div>

                    {/* description term render div here */}
                    <div className=" p-2  w-full flex flex-col bg-white md:rounded-tr-lg">
                      {
                        <p className="text-gray-700 rounded-none  text-base lg:h-48 ">
                          {
                            props.Data.MainForm.stateData[idxValue][currentSlide]? props.Data.MainForm.stateData[idxValue][currentSlide].defination:null
                          }
                        </p>
                      }
                    </div></div>
                  
                  {/* downward backward forward Icon added */}
                  <div className=" w-full flex place-items-center justify-center mb-4 bg-sky-500">
                      <button><VscChevronLeft className="mr-8 md:mr-16" onClick={handlePrevSlide}/></button>
                      <p className="text-center">Card no</p>
                    <button><VscChevronRight className="ml-8 md:ml-16" onClick={handlefrwdSlide}/></button>
                  </div>
              </div>
            </div>

            {/* rightmost sidebar container consist of three button here */}
            <div className="w-auto lg:w-1/5  mr-1 ml- sm:ml-  ">
              <div className=" h-auto">
                <div className="">
                  <div className="w-full  rounded ">
                    <div className="px- py-">
                      <div>
                        <ul className="mx-2 mt-">
                          <li className="mb-2 ">
                            <button className=" place-items-center lg:pr- flex group justify-center lg:justify-evenly group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-center p- text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                              <PiShareNetworkLight className="mr-8 lg:mr-2" />
                              <p className="text-center pr-8 ">Share</p>
                            </button>
                          </li>

                          <li className="mb-2  mt-4">
                            <button className="place-items-center  flex  group justify-center lg:justify-evenly group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-center p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                              <FiDownload className="mr-8 lg:mr-2" />
                              <p className="mr-">Download</p>
                            </button>
                          </li>

                          <li className="mb-2 mt-4">
                            <button className="place-items-center justify-center lg:justify-evenly flex group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-12 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w- after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                              <FiPrinter className="mr-12 lg:mr-2" />
                              <p className="mr-6 ">Print</p>
                            </button>
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

   
      </div>
    </div>
  );
}
// export default AssembleThree;

const storeSeJana = (state) => {
  return { Data: state };
};

const StoreMeAna = (dispatch) => ({});

export default connect(storeSeJana, StoreMeAna)(AssembleThree);




