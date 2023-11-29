import { connect } from "react-redux";
import MainFormAction from "../../redux/action/mainFormAction";
import { useRef } from "react";
import { useFormik, Formik, Form, Field } from "formik";
import { useState } from "react";
import MiddleForm from "./middleForm";

//Define initial Values for form field
const initialValues = {
  groupName: "",
  addDescription: "",
  img: "",
};

// Validate the form field if field is not filled then it show error message
const validate = (values) => {
  let errors = {};
  if (!values.groupName) {
    errors.groupName = "Required*";
  }
  if (!values.addDescription) {
    errors.addDescription = "Required*";
  }
  return errors;
};

function FormPage(props) {

  const FormImg = useRef();
  const [idx, setIdx] = useState(0);
  const [img, setImg] = useState("");

  //formik form submit function, we intentionally make it empty
  const onSubmit = (values, { resetForm }) => {};

  // call formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //here image handling is done since image is not handle as we do in text,hence by the use of js file reader function we handle images
  function imageHandler(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
 
  //create an array an assing values as null if none field is fill
  var midFormDataArray = [{ term: null, defination: null, img: null }];
  var mergeArray = [];
  //function for data catch coming from their child component i.e. middleForm
  function form2Data(values) {
    midFormDataArray.push(values);
  }

  //here we merge all data from this page and middleform page and send it to Redux and finally reset form
  function countIncreaseHandler() {
    setIdx((count) => count + 1);
    let mainFormData;
    if (formik.values.groupName && formik.values.addDescription) {
      mainFormData = {
        idx1: idx,
        groupName: formik.values.groupName,
        groupDescription: formik.values.addDescription,
        img: img,
      };

      mergeArray = [mainFormData, ...midFormDataArray];
      props.MainPageDataAddedToRedux(mergeArray);
      formik.resetForm();
    }
  }

  return (
    // <div key ={index}>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      <div className="mr-8">
        <div className=" justify-center w-full  ">
          {/* forms start here */}
          <Form onSubmit={formik.handleSubmit}>
            <div className="w-full bg-blue-400 px-8 mx-4 border rounded ">
              {/* Group Name div */}
              <div className="flex flex-wrap -mx-3 mb-3 ">
                <div className="w-full md:w-2/3 px-3  pt-6 md:mb-0">
                  <label
                    className="block uppercase  text-xs font-bold mb-2" htmlFor="group-name">
                    Group Name*
                  </label>
                  <Field
                    className="  w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-0 focus:outline-none focus:bg-white" id="group-name"  type="text" placeholder="Group Name" name="groupName"
                    {...formik.getFieldProps("groupName")}
                  />
                  {formik.touched.groupName && formik.errors.groupName ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.groupName}
                    </div>
                  ) : null}
                </div>
                {/* image input */}
                <div className="w-full md:w-2/6 px-3  mb-2 md:mb-0 mt-5 md:mt-12 ">
                  <input
                    type="file"
                    onChange={imageHandler}
                    // onBlur={imageHandler}
                    ref={FormImg}
                    hidden
                    name="image1"/>
                  <button
                    className=" w-full bg-gray-200 hover:bg-white  uppercase text-xs font-bold   border border-red-500 rounded h-12"
                    onClick={() => {
                      FormImg.current.click();
                    }}
                    type="button">
                    Select Image
                  </button>
                </div>
              </div>

              {/* Group Description div */}
              <div className=" md:pl-3 px-3 md:px-0 flex flex-wrap -mx-3 mb-3">
                <label
                  className="block uppercase  text-xs font-bold mb-2"
                  htmlFor="group-desciption"
                >
                  Add Description
                </label>
                <Field
                  as="textarea"
                  className=" w-full bg-gray-200 border border-red-500 rounded h-24 pt-2  px-4 mb-3 resize-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="group-desciption"
                  type="text"
                  placeholder="Add description"
                  name="addDescription"
                  {...formik.getFieldProps("addDescription")}/>
                {formik.touched.addDescription &&
                formik.errors.addDescription ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.addDescription}
                  </div>
                ) : null}
              </div>
            </div>

            {/* end of upper form  */}

            {/*  mid form calls here */}
            <div className=" w-full bg-blue-400 px-6 border rounded pt-7 mt-4 mx-4 mb-4">
              <MiddleForm
                form2Data={form2Data}
                midFormDataArray={midFormDataArray}
              />
            </div>
            {/* mid form ends here */}

            <div className="flex justify-center ml-8 md:ml-0 mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-400 mb-4 text-black block uppercase text-xs font-bold py-2  border-b-4 border-blue-700 hover:border-blue-500 rounded  w-56 md:w-64"
                type="submit"
                onClick={countIncreaseHandler}>
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

const StoreSejana = (state) => ({
  Data: state,
});



//through this below we connect our form page to redux action page
const StoreMeAna = (dispatch) => ({
  MainPageDataAddedToRedux: (data) => dispatch(MainFormAction(data)),
});
export default connect(StoreSejana, StoreMeAna)(FormPage);
