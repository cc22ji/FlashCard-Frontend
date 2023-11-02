import Background from "./components/pageOne/Background"
import ParentPage from "./components/pageOne/ParentPage";
import FormPage from "./components/pageOne/FormPage";
import FormContainer from "./container/formContainer"
import Card from "./components/pageTwo/card";
import CardContainer from "./container/cardContainer"
import AssembleThree from "./components/pageTree/AssembleThree"

import { Provider } from "react-redux";
import Store from "./redux/store"

import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Provider store={Store}>
      <Background>
        <ParentPage>
        <Routes>
        <Route path="/home" Component={FormContainer}/>
        <Route path="/card" Component={ CardContainer}/>    
        <Route path="/details" Component={AssembleThree}/>
        </Routes>
        </ParentPage>
      </Background>
      </Provider>
    </div>
  );
}

export default App;
