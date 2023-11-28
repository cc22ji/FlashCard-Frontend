// import { useRef } from "react"
// import React from "react"
// import {useFormik,Formik,Form,Field,} from "formik"


// const  initialValues = {
//   enterTerm: "",
//   enterDefination:"",
// };


// const validate =  values=>{
//   let errors = {}
//   if(!values.enterTerm){
//     errors.enterTerm = "Required"
//   }
//   if(!values.enterDefination){
//    errors.enterDefination = "Required"
//  }
//  return errors;
// }


// function Details(){

//   const DetailImg =  useRef();

//   const onSubmit= (values)=>{
    
//     values.preventDefault()
//   }
  

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//    });
 



//     return(

//       <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
//       <div>
//       <div className="flex justify-center w-full mt-3 ">
//         <Form class=" w-full bg-blue-500 px-6 border rounded pt-7 mx-4" 
//         onSubmit={formik.handleSubmit}
//         >
        
  
//   <div class="flex flex-wrap  mb-2 pb-4">

//     <div class="w-full md:w-2/6 px-3 mb-6 md:mb-0">
//       <label class="block uppercase  text-xs font-bold mb-2" for="term-name">
//         Enter Term
//       </label>
//       <Field class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4   focus:outline-none focus:bg-white focus:border-gray-500" id="term-name" type="text" placeholder="Enter Term" name="enterTerm" 
//       {...formik.getFieldProps("enterTerm")}
//       />
//       {formik.touched.enterTerm && formik.errors.enterTerm?(<div>{formik.errors.enterTerm}</div>):null}
//     </div>


//     <div class="w-full md:w-2/6 px-3  mb-6 md:mb-0">
//       <label class="block uppercase text-xs font-bold mb-2" for="term-defination">
//         Enter Defination
//       </label>
//       <Field class=" w-full bg-gray-200  border border-red-500 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500" id="term-defination" type="text" placeholder="Enter Defination" name="enterDefination"
//         {...formik.getFieldProps("enterDefination")}
//         />
//       {formik.touched.enterDefination && formik.errors.enterDefination?(<div>{formik.errors.enterDefination}</div>):null}
//     </div>


//     <div class="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-6 ">
//     <input type="file" ref={DetailImg} hidden name="image2"></input>
//     <button class=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12" onClick={()=>{DetailImg.current.click()}} 
//     type="button"
//     >Select Image</button>
   
//     </div>



//   </div>
//   <div className="ml-3 text-sm font-bold text-white mb-3 pb-4">
//      <button type="">+ Add More</button>
//   </div>
  
// </Form>
//       </div>
      
//       </div>
//        </Formik>
//     )
// }

// export default Details;






  







