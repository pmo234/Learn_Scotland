import { useEffect, useState } from "react";
import LearnScotlandContainer from "./containers/LearnScotlandContainer";
const baseURL = "http://localhost:9000/api/questions/";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    return fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  };

  return (
    <div className="App">
      <LearnScotlandContainer />
    </div>
  );
}

export default App;
