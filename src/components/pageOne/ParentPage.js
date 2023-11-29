import { Link } from "react-router-dom";

function ParentPage(props) {

  return (

    <div className="justify-center">
    <div className=" flex justify-center w-full  ">
      <ul className=" w-2/3  bg-gray-700 pt-3 border rounded">

        <div className="my-2 mx-3">
          <h1 className=" uppercase text-2xl text-white font-bold">
            Create FlashCard
          </h1>
        </div>
        

        <div className="md:flex mx-3 pl-2 mt-5 mb-4 md:mb-1">

          <li className="mr-12">
            <Link to="/" className="text-white text-xl hover:text-blue-500">Create New</Link>
          </li>
          

          <li className="mt-4 md:mt-0">
          <Link to="/card" className="text-white text-xl hover:text-blue-500">My FlashCard</Link>
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
