// import { DELETE_DATA } from "../constant";


// function DeleteReducer(state=[],DeleteAction){
//    // console.log("Delete reducer incoming data",DeleteAction)

//     switch(DeleteAction.type){
//         case DELETE_DATA : 
//         let data = state.inputData.filter((ele, ind) => ind !== action.payloade);
//         localStorage.setItem('card-input', JSON.stringify(data));
//         // console.log('delete reducer ', action.payload);
//         return {
//             ...state,
//             inputData: [...data]
//         }
// };

// export default DeleteReducer;
