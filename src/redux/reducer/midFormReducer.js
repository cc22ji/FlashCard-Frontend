// import {MID_FORM_DATA} from "../constant"
// import { DELETE_DATA } from "../constant";




// function MidFormReducer(state=[],MidFormAction){
//     switch(MidFormAction.type){
//         case MID_FORM_DATA : 
//     //    console.log("mid form reducer data ", MidFormAction)
//          return[...state , MidFormAction.data]
         
//         case DELETE_DATA :
//             let data = state.filter((item, index) => index !== action.data_Idx);
//             return[...state , ...data]
            
//         default :
//             return state
//     }
// }; 

// export default MidFormReducer;