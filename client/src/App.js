import LearnScotlandContainer from "./containers/LearnScotlandContainer";
import { useEffect, useState } from "react";



function App() {


  return (
    <div className="App">
      <LearnScotlandContainer baseURL={baseURL}/>
    </div>
  );
}

export default App;
