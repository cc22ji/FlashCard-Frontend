
import { connect } from "react-redux";
import MainFormAction from "../../redux/action/mainFormAction";
import { useRef } from "react";
import { useFormik,Formik,Form,Field } from "formik";
import { useState ,useEffect} from "react";
import MiddleForm from "./middleForm";


const initialValues = {
 groupName : "",
 addDescription  : "",
}

const validate = values=>{
  let errors={}
  if(!values.groupName){
    errors.groupName = "Required"
  }
  if(!values.addDescription){
    errors.addDescription = "Required"
  }
  return errors;
}


function FormPage(props) {
 
 const FormImg = useRef();
 const [idx,setIdx] = useState(0)
 const [send,setSend] = useState(false)


 function countIncreaseHandler(){
  // if(props.Data.MidForm.length!==0){
  setIdx(idx + 1)
  // }
 }

 const additionalData = {
  //  id : `${Math.random().toString(36).substr(2, 9)}`,
   index : {idx}
 }

 const onSubmit = (values,{resetForm})=>{
  values.additionalData = additionalData; 
  setSend(true)
  // if(props.Data.MidForm.length!==0){
    props.MainPageDataAddedToRedux(values) 
    resetForm();
  // }
}
 function form2Data(values){
    console.log("values",values)
 }

 const formik = useFormik({
  initialValues,
  onSubmit,
  validate,
 })
 
 
  return (
  // <div key ={`${Math.random().toString(36).substr(2, 9)}`}>
    <Formik initialValues={initialValues} 
    onSubmit={onSubmit} 
    validate={validate}
    >

    <div className="mr-8" >
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
    <MiddleForm  send={send} idx={idx} formdata={formik.values} form2Data={form2Data}/>
    </div>
    {/* end of second box form*/}

    <div className="flex justify-around mt-4">
<button class="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2 px border-b-4 border-blue-700 hover:border-blue-500 rounded  w-56 md:w-64" type="submit" onClick={countIncreaseHandler}  >
Create FlashCard
</button>
</div>

</Form>

    </div>
    </div>
    </Formik>
    //  </div>
    
  );
}




const StoreSejana = state=>({ 
  Data:state
});

//through this below we connect our form page to redux action page 
const StoreMeAna = dispatch=>({
  MainPageDataAddedToRedux : data=>dispatch(MainFormAction(data))
});
 export default connect(StoreSejana,StoreMeAna)(FormPage);





