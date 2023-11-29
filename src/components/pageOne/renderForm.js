import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";


function RenderForm(props) {
  //data coming from middle form is store inside an array and then render it
  let data = [...props.midFormDataArray];

  return (
    <div >
      {data.map((items, index) =>
        index == 0 ? null : (
          <div className="flex flex-wrap  mb-2 pb-4" key={index}>
            {/* enter term div */}
            <div className="w-full  md:w-2/6 px-3 mb-6 md:mb-0 overflow-hidden break-words ">
              <label
                className="block uppercase  text-xs font-bold mb-2"
                htmlFor="term-name"
              >
                Term
              </label>
              <div
                className=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                id="term-name"
                type="text"
                placeholder="Enter Term"
                name="enterTerm"
              >
                {items.term}
              </div>
            </div>

            {/* enter defination div here */}
            <div className="w-full md:w-2/6 px-3  mb-6 md:mb-0 overflow-hidden break-words">
              <label
                className="block uppercase text-xs font-bold mb-2"
                htmlFor="term-defination"
              >
                Defination
              </label>
              <div
                className=" w-full bg-gray-200  border border-gray-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                id="term-defination"
                type="text"
                placeholder="Enter Defination"
                name="enterDefination overflow-hidden "
              >
                {items.defination}
              </div>
            </div>

            {/* image input button here */}
            <div className="w-full md:w-2/6   px-3 flex mb-2 md:mb-0 mt-5 md:mt-6 justify-evenly">
              <div className="   w-40 md:w-1/2 bg-gray-200 hover:bg-white break-words uppercase text-xs font-bold   border border-red-500 rounded h-auto md:h-12 lg:h-auto">
                <img src={items.img} alt="/" />
              </div>
              {/* icons added here */}
              <div className="pl-4 md:pl-0 lg:flex flex-col py-2 md:py-1 lg:py-4 justify-between">
                <button type="button">
                  {" "}
                  <RiDeleteBin6Line className="mb-4 md:mb-4 lg:mb-0" />
                </button>
                <FiEdit  />
              </div>
              {/* icons div  ends above here */}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default RenderForm;
