import Background from "./components/pageOne/Background"
import ParentPage from "./components/pageOne/ParentPage";
import FormPage from "./components/pageOne/FormPage";
import Card from "./components/pageTwo/card";
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
        <Route path="/" Component={FormPage}/>
        <Route path="/card" Component={ Card}/>    
        <Route path="/details" Component={AssembleThree}/>
        </Routes>
        </ParentPage>
      </Background>
      </Provider>
    </div>
  );
}

export default App;
