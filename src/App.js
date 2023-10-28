import CoverPage from "./components/pageOne/coverPage";
import BgCover from "./components/pageOne/bgCover";
import CreateGroup from "./components/pageOne/createGroup";

import AssembleThree from "./components/pageTree/AssembleThree";

import Card from "./components/pageTwo/card";

function App() {
  return (
    <div>
      <BgCover>
        <CoverPage>
          <CreateGroup />
          <Card />
          <AssembleThree />
        </CoverPage>
      </BgCover>
    </div>
  );
}

export default App;
