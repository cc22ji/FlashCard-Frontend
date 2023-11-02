import { FiArrowLeft } from "react-icons/fi";
import LinkList from "./linkList";
import CardListContainer from "../../container/cardListContainer";
import CardDetailsContainer from "../../container/cardDetailsContainer";


function AssembleThree() {
  return (
    <div>
      <div class="flex-none lg:flex-wrap">
        <div class="w-full  mb-4 bg-gray-500">

            <div className="flex p-3 mb-0 pb-1  place-items-center">
                <FiArrowLeft className=""/>
                <p className="pl-4 uppercase  text-sm font-semibold">Group Name</p>
            </div>

            <div>
                <p className="pl-12 pr-2 pb-4">Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
        </div>







        {/* Nested component Assembly  */}



        <div class="px-4 mb-5 ">
            <div class="lg:flex -mx-2">

                <div class="w-auto lg:w-1/5  px-2">
                   <div class=" h-auto"><CardListContainer/></div>
               </div>

                   <div class="w-auto lg:w-3/5 px-2  lg:mb-0 mb-5 sm:mb-4 ">
                       <div class=" h-auto"><CardDetailsContainer/></div>
                   </div>

               <div class="w-auto lg:w-1/5  mr-1 ml- sm:ml-  ">
                    <div class=" h-auto"><LinkList/></div>
              </div>

           </div>
       </div>











        {/* bottom tag div */}
       
      </div>
    </div>
  );
}
export default AssembleThree;
