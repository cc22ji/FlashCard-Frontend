import { useRef, useState, useEffect } from "react";
import RenderForm from "./renderForm";
import { connect } from "react-redux";
import MidFormAction from "../../redux/action/midFormAction";
import FormPage from "./FormPage";

  let Datas = [];
    
 function MiddleForm(props){
    const  DetailImg = useRef();
    const [term ,setTerm] = useState("")
    const [defination ,setDefination] = useState("")
    const [img ,setImg] = useState("")
    const [showData, setShowData] = useState(false);
    const [termerrorMessage, setTermErrorMessage] = useState('');
    const [definationerrorMessage, setDefinationErrorMessage] = useState('');
    const [idx,setIdx] = useState(0)
    const [sendData,setSendData] = useState(true)
     
    function TermHandle(e){
        setTerm(e.target.value)
        if (e.target.value.trim() === '') {
          setTermErrorMessage('Required');
        } else {
          setTermErrorMessage('');
        } 
    }

    function DefinationHandle(e){
        setDefination(e.target.value)
        if (e.target.value.trim() === '') {
          setDefinationErrorMessage('Required');
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
        if(term && defination && img){
        setShowData(true)
        setSendData(false)
        }
        setIdx(idx + 1 )
        
        const id = `${Math.random().toString(36).substr(2, 9)}`
        let b = props.idx
         fieldsData = {b,card_data:{idx,id,term,defination,img}};
        Datas.push(fieldsData) 
        console.log(Datas)
        // const fieldsData = {idx,id,term,defination,img}
        // props.MidPageDataAddedToRedux(Datas)
        setTerm("")
        setDefination("")
        setImg("")
      };
         
       
      // if(props.send===true && sendData===false  && term!== "" && img!=="" &&   defination !== ""  ){
        // setIdx(0)
          // const id = `${Math.random().toString(36).substr(2, 9)}`
          // let b = props.idx
          // const fieldsData = {b,card_data:{idx,id,term,defination,img}}; 
          // Datas.push(fieldsData) 
          // console.log(Datas)    
          // props.send && props.MidPageDataAddedToRedux(Datas);
          // console.log("last data",term,defination,img);
          // setTerm("")
          // setDefination("")
          // setImg("")
      //  }

      return(
        <div><form onSubmit={handleDisplayData}>

    {/* {showData && <RenderForm  showData={showData} grpIdx={props.idx}/>} */}

    <div class="flex flex-wrap  mb-2 pb-4">

 {/* enter term div */}
  <div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
  <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
    Enter Term
  </label>
  <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4   focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm"  onChange={TermHandle} onBlur={TermHandle} required/>
    {termerrorMessage && <span style={{ color: 'red' }}>{termerrorMessage}</span>}
  </div>

 {/* enter defination div here */}
  <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0">
  <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
    Enter Defination
  </label>
  <input class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination"  onChange={DefinationHandle} onBlur={DefinationHandle} required/>
  {definationerrorMessage && <span style={{ color: 'red' }}>{definationerrorMessage}</span>}
</div>

{/* image input button here */}
 <div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-6 ">
 <input type="file"  onChange={imageHandler} onBlur={imageHandler} required
ref={DetailImg} 
hidden name="image2"></input>
<button class=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12"   required 
onClick={()=>{DetailImg.current.click()}} 
type="button"
>Select Image</button>
</div>

</div>


{/* add more div here */}
<div className="ml-3 text-sm font-bold text-white mb-3 pb-4">
 <button href="#" type="button"  onClick={handleDisplayData}>+ Add More</button>
 {
  (props.Data.MidForm.length===0)&&(props.send) &&(<div>error</div>)
}
</div>
{
(props.send===true && sendData===false  && term!== "" && img!=="" && defination !== ""  )
   && (<div>regaduyhjsn</div>)
}
</form>
  
 </div>
  )}




  const StoreSejana = state=>({ 
      Data:state
  });
  const StoreMeAna = dispatch=>({
      MidPageDataAddedToRedux :(data,grpIdx)=>dispatch(MidFormAction(data,grpIdx))
  });
  
  
  export default connect(StoreSejana,StoreMeAna)(MiddleForm);
