
import mata from "../../images/mata.jpg"
import { VscChevronLeft,VscChevronRight } from "react-icons/vsc";

//flex w-full lg:max-w-xs rounded items-center flex-wrap
function CradDetails() {
  return (
    <div className="">
   
    <div class=" lg:max-w-full flex-grow lg:flex ">

  <div class="h-48  lg:h-auto bg-white p-4 lg:w-48  bg-cover rounded-t  lg:rounded-l text-center overflow-hidden flex-shrink-0 ">
    <img src={mata} className="w-auto sm:w-auto h-48 sm:h-48 lg:h-auto lg:w-48" />
  </div>

  <div class=" p-2 flex flex-col bg-white">

      <p class="text-gray-700 rounded-none text-base lg:h-48  lg:overflow-y-scroll">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, .</p>
    </div>
</div> 
<div class="w-full flex place-items-center justify-center mb-4 bg-gray-400">
            <a href="#"><VscChevronLeft className="mr-8 md:mr-16"/></a>
            <p className="text-center">Card no</p>
            <a href="#">
            <VscChevronRight className="ml-8 md:ml-16"/>
            </a>
        </div>
    </div>
  )
}

export default CradDetails;
