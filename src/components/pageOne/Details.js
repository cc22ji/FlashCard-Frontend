import { useRef } from "react"


function Details(){

  const DetailImg =  useRef();
    return(

      <div>
      <div className="flex justify-center w-full mt-3 ">
        <form class=" w-full bg-blue-500 px-6 border rounded pt-7 mx-4">
        
  
  <div class="flex flex-wrap  mb-2 pb-4">

    <div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
      <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
        Enter Term
      </label>
      <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4   focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term"/>
    </div>


    <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0">
      <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
        Enter Defination
      </label>
      <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination"/>
    </div>


    <div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-6 ">
    <input type="file" ref={DetailImg} hidden></input>
    <button class=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12" onClick={()=>{DetailImg.current.click()}} >Select Image</button>
   
    </div>



  </div>
  <div className="ml-3 text-sm font-bold text-white mb-3 pb-4">
     <a href="#">+ Add More</a>
  </div>
</form>
      </div>
     
      <div className="flex justify-around mt-4">
    <button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px border-b-4 border-blue-700 hover:border-blue-500 rounded  w-56 md:w-64">
   Create FlashCard
</button>
    </div>
      </div>
    )
}

export default Details