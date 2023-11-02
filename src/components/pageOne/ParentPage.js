import { Link } from "react-router-dom";

function ParentPage(props) {

  return (

    <div className="justify-center">
    <div className=" flex justify-center w-full  ">
      <ul class=" w-2/3  bg-gray-700 pt-3 border rounded">

        <div className="my-2 mx-3">
          <h1 className=" uppercase text-2xl text-white font-bold">
            Create FlashCard
          </h1>
        </div>
        

        <div className="md:flex mx-3 pl-2 mt-5 mb-4 md:mb-1">

          <li class="mr-12">
            
            <Link to="/home" class="text-white text-xl hover:text-blue-500">Create New</Link>
          {/* <a class="text-white text-xl hover:text-blue-500" href="#">
              Create New
            </a> */}
          </li>
          

          <li class="mt-4 md:mt-0">
          <Link to="/card" class="text-white text-xl hover:text-blue-500">My FlashCard</Link>
            {/* <a class="text-white text-xl hover:text-blue-500" href="#">
              My FlashCard
            </a> */}
          </li>
        </div>

        <div className="text-white text-xl pb-4 px-4"><hr className="border-1"></hr></div>
        
        <div className="block">{props.children}</div>

      </ul>
        
    </div>
    </div>
  );
}

export default ParentPage;
