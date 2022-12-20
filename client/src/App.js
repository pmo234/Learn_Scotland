
import LearnScotlandContainer from "./containers/LearnScotlandContainer";
import { useEffect, useState } from "react";
import users from "./containers/Home";

console.log(users);

function App() {


  return (
    <div className="App">
      <LearnScotlandContainer/>
    </div>
  );
}

export default App;
