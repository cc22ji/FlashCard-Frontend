import Details from "./Details";
import { useRef } from "react";





function CreateGroup() {

 const ImgRef = useRef()

  return (
    <div>
    <div className="flex justify-center w-full ">
       <form class="w-full bg-blue-500 px-8 mx-4 border rounded">

  <div class="flex flex-wrap -mx-3 mb-3">


    <div class="w-full md:w-2/3 px-3  pt-6 md:mb-0">
      <label class="block uppercase  text-xs font-bold mb-2" for="group-name">
        Group Name*
      </label>
      <input class="  w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-0 focus:outline-none focus:bg-white" id="group-name" type="text" placeholder="Group Name" />
    </div>

    <div class="w-full md:w-1/3 flex flex-wrap items-center  bg-gray-200 px-3 mx-3 md:mx-0 h-12 mt-6 md:mt-12 mb-0 md:mb-2 border border-red-500 rounded focus:outline-none focus:bg-white justify-center ">
   
      <input type="file" ref={ImgRef} hidden></input>
      <button className=" block uppercase  text-xs font-bold" onClick={() => {
    ImgRef.current.click();
    }}>select image</button>
      
      </div>
    </div>

  
    <div class=" md:pl-3 px-3 md:px-0 flex flex-wrap -mx-3 mb-3">
      <label class="block uppercase  text-xs font-bold mb-2" for="group-desciption">
        Add Description 
      </label>
      <textarea class=" w-full bg-gray-200 border border-red-500 rounded h-24 pt-2  px-4 mb-3 resize-none focus:outline-none focus:bg-white focus:border-gray-500" id="group-desciption" type="text" placeholder="Add description"/>
    </div>
</form>
    </div>

   <Details/>
    </div>
  );
}
export default CreateGroup;
