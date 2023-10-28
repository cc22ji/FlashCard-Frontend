import pic from "../../images/white2.jpg";
import mata from "../../images/mata.jpg"



function Card() {
  return (
    <div className="flex justify-around flex-wrap  ml-">

      <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>

              {/* for round pic anf flex content name & cards no */}
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={mata} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt-1 w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>

            {/* for description */}
            <div class="mb-8 pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>

            {/* for view card button */}
            <div className="w-full flex justify-evenly mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>


          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={pic} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt- w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>
            <div class="mb-8  pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={mata} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt- w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>
            <div class="mb-8  pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={pic} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt- w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>
            <div class="mb-8  pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card 5 */}
      <div className="w-64 h-auto justify-center  overflow-hidden m-3">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={mata} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt- w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>
            <div class="mb-8  pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* test 6 */}
      <div className="w-64 h-auto justify-center  overflow-hidden m-3 ">
        <div class=" rounded  p-4 flex  bg-sky-700  ">
          <div>
            <div className="flex pt-4 pl-2 mb-6">
              <img class=" w-12 h-12 rounded-full mr-4 " src={pic} alt="Avatar"/>
              <div>
                <p class="text-black leading-none font-bold text-lg mt-1">Group Name</p>
                <p class="text-black mt- w- h-3 ml-1"> Cards 10x</p>
              </div>
            </div>
            <div class="mb-8  pr-1 md:pr-0">
              <p class="text-black text-base"> Lorem ipsum dolor sit amet, consectet adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,  exercitationem praesentium nihil.</p>
            </div>
            <div className="w-full flex justify-center mt-4">
              <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                <pre>view Cards</pre>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
