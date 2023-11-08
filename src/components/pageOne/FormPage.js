
import { useRef } from "react";
import { useFormik,Formik,Form,Field } from "formik";
import RenderContainer from "../../container/renderContainer"
import { useState } from "react";
import RenderForm from "../pageOne/renderForm"

const initialValues = {
 groupName : "",
 addDescription  : "",
 enterTerm: "",
  enterDefination:"",
}

const validate = values=>{
  let errors={}
  if(!values.groupName){
    errors.groupName = "Required"
  }
  if(!values.addDescription){
    errors.addDescription = "Required"
  }
  if(!values.enterTerm){
    errors.enterTerm = "Required"
  }
  if(!values.enterDefination){
   errors.enterDefination = "Required"
 }
  
  return errors;
}



function FormPage(props) {
  console.log("submit props",props)
 const FormImg = useRef();
 const  DetailImg = useRef();
 const [idx,setIdx] = useState(0)
 const [term ,setTerm] = useState("")
 const [defination ,setDefination] = useState(null)
 const [img ,setImg] = useState(null)

 function countIncreaseHandler(){
  setIdx((count) => (count + 1) );
  formik.submitForm();
   }
 const additionalData = {
  id : `${Math.random().toString(36).substr(2, 9)}`,
  index : {idx}
 }

 const onSubmit = (values,{ resetForm,})=>{
  // const abc = [...values]
  values.additionalData = additionalData;
  console.log("onsumbit1",values );
  console.log("onsumbit2 ",values.groupName );
  props.addToRedux(values)
  resetForm();
  // console.log("submitted 2",abc)
  
}
 function abcd(){
     
 }

 const formik = useFormik({
  initialValues,
  onSubmit,
  validate,
  
 })

 

  return (

    <Formik initialValues={initialValues} 
    onSubmit={onSubmit} 
    validate={validate} >

    <div className="mr-8">
    <div className=" justify-center w-full  ">
  
      {/* forms start here */}
       <Form onSubmit={formik.handleSubmit} >
       
        <div  class="w-full bg-blue-400 px-8 mx-4 border rounded ">

          {/* Group Name div */}
  <div class="flex flex-wrap -mx-3 mb-3 ">
    <div class="w-full md:w-2/3 px-3  pt-6 md:mb-0">
      <label class="block uppercase  text-xs font-bold mb-2" for="group-name">
        Group Name*
      </label>
      <Field class="  w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-0 focus:outline-none focus:bg-white" id="group-name" type="text" placeholder="Group Name" name="groupName" 
       {...formik.getFieldProps("groupName")}
       />
      {
        formik.touched.groupName && formik.errors.groupName?(<div>{formik.errors.groupName}</div>):null
      }
    </div>
    {/* image input */}
    <div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-12 ">
     <input type="file" 
    ref={FormImg} 
    hidden name="image1"></input>
    <button class=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12" 
    onClick={()=>{FormImg.current.click()}} 
    type="button"
    >Select Image</button>
  </div>
      
    </div>

  {/* Group Description div */}
    <div class=" md:pl-3 px-3 md:px-0 flex flex-wrap -mx-3 mb-3">
      <label class="block uppercase  text-xs font-bold mb-2" for="group-desciption">
        Add Description 
      </label>
      <Field as="textarea" class=" w-full bg-gray-200 border border-red-500 rounded h-24 pt-2  px-4 mb-3 resize-none focus:outline-none focus:bg-white focus:border-gray-500" id="group-desciption" type="text" placeholder="Add description" name="addDescription"{...formik.getFieldProps("addDescription")} />
      {
        formik.touched.addDescription && formik.errors.addDescription  ? (<div>{formik.errors.addDescription}</div>):null
      }
    </div>
   
    </div>
    
    {/* end of first box */}

    {/*  second box form start here */}

    
    <div  class=" w-full bg-blue-400 px-6 border rounded pt-7 mt-4 mx-4 mb-4">


{/* rendreing data */}
      
    {/* <RenderContainer  term={term}/> */}
    {/* <RenderForm term={term}/> */}


    <div class="flex flex-wrap  mb-2 pb-4">

{/* enter term div */}
<div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
  <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
    Enter Term
  </label>
  <Field class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4   focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm" 
  {...formik.getFieldProps("enterTerm")}
  />
  {/* {formik.touched.enterTerm && formik.errors.enterTerm?(<div>{formik.errors.enterTerm}</div>):null} */}
</div>

{/* enter defination div here */}
<div class="w-full md:w-2/6 px-3  mb-6 md:mb-0">
  <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
    Enter Defination
  </label>
  <Field class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination"
    {...formik.getFieldProps("enterDefination")}
    />
  {formik.touched.enterDefination && formik.errors.enterDefination?(<div>{formik.errors.enterDefination}</div>):null}
</div>

{/* image input button here */}
<div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-6 ">
<input type="file" 
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
 <button href="#" type="button" onClick={abcd}>+ Add More</button>
</div>

{/* create flashCard Buttton here */}
{/* <div className="flex justify-around mt-4">
<button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px border-b-4 border-blue-700 hover:border-blue-500 rounded  w-56 md:w-64" type="submit" onClick={countIncreaseHandler}>
Create FlashCard
</button>
</div>  */}
    </div>
    {/* end of second box form*/}
</Form>

<div className="flex justify-around mt-4">
<button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px border-b-4 border-blue-700 hover:border-blue-500 rounded  w-56 md:w-64" type="submit"  onClick={countIncreaseHandler}>
Create FlashCard
</button>
</div>

    </div>
    
    </div>
    </Formik>
    
  );
}
export default FormPage;
