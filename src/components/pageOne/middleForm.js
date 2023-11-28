import { useEffect, useRef, useState } from "react";
import RenderForm from "./renderForm";
    
let termFormData = []
 function MiddleForm(props){
  // console.log("mid form data",props)
    const  DetailImg = useRef();
    const [term ,setTerm] = useState("")
    const [defination ,setDefination] = useState("")
    const [img ,setImg] = useState("")
    const [showData, setShowData] = useState(false);
    const [termerrorMessage, setTermErrorMessage] = useState('');
    const [definationerrorMessage, setDefinationErrorMessage] = useState('');
    const [idx,setIdx] = useState(1)
     
    function TermHandle(e){
        setTerm(e.target.value)
        if (e.target.value.trim() === '') {
          setTermErrorMessage('Required*');
        } else {
          setTermErrorMessage('');
        } 
    }

    function DefinationHandle(e){
        setDefination(e.target.value)
        if (e.target.value.trim() === '') {
          setDefinationErrorMessage('Required*');
        } else {
          setDefinationErrorMessage('');
        }
    }

    function imageHandler(e){
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImg(e.target.result);
          };
          reader.readAsDataURL(file);
        } 
      }

      
      let fieldsData = {}
      const handleDisplayData = (e) => {
        e.preventDefault()
        setShowData(true)
        setIdx(idx + 1 )
        if(term && defination){
        fieldsData = {idx,term,defination,img};
        termFormData.push(fieldsData) 
        props.form2Data(fieldsData)
        setTerm("")
        setDefination("")
        setImg("")
      }}


       


      return(
        <div>
          {/* <form onSubmit={handleDisplayData}> */}
       
    {showData && <RenderForm   midFormDataArray={props.midFormDataArray} termFormData={termFormData} fieldsData={fieldsData}/>}
    {/* <RenderForm midFormDataArray={props.midFormDataArray} termFormData={termFormData}/> */}

    
    <div class="flex flex-wrap  mb-2 pb-4">

 {/* enter term div */}
  <div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
  <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
    Enter Term
  </label>
  <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4   focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm" 
   onChange={TermHandle} onBlur={TermHandle} required value={term}
   />
    {termerrorMessage && <span style={{ color: 'red' }}>
      {termerrorMessage}</span>}
      
  </div>

 {/* enter defination div here */}
  <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0">
  <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
    Enter Defination
  </label>
  <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination"  
  onChange={DefinationHandle} onBlur={DefinationHandle} value={defination} required
  />
  {definationerrorMessage && <span style={{ color: 'red' }}>{definationerrorMessage}</span>}
  
</div>

{/* image input button here */}
 <div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-6 ">
 <input type="file"  onChange={imageHandler} onBlur={imageHandler} 
ref={DetailImg} 
hidden name="image2"></input>
<button class=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12"   
onClick={()=>{DetailImg.current.click()}} 
type="button"
>Select Image</button>
</div>

</div>


{/* add more div here */}
<div className="ml-3 text-sm font-bold text-white mb-3 pb-4">
 <button   href="#" type="button"   onClick={handleDisplayData}>
  + Add More</button>
</div>
{/* </form> */}
  
  </div>

 
  )}




  // const StoreSejana = state=>({ 
  //     Data:state
  // });
  // const StoreMeAna = dispatch=>({
  //     MidPageDataAddedToRedux :(data,grpIdx)=>dispatch(MidFormAction(data,grpIdx))
  // });
  
  
  // export default connect(StoreSejana,StoreMeAna)(MiddleForm);
  export default MiddleForm
