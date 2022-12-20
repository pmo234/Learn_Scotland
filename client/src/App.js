import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleQuestion from "./components/quizSingle"
import MultiQuestion from "./components/MultipleChoice";
import DragNDrop from "./components/QuizDragNDrop";
import MapQ from "./components/MapQ";
import LearnScotlandContainer from "./containers/LearnScotlandContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LearnScotlandContainer />}
          />
          <Route
            path="/singlechoice"
            element={<SingleQuestion />}
          />
          <Route
            path="/multiplechoice"
            element={<MultiQuestion/>}
          />
          <Route
            path="/dragndrop"
            element={<DragNDrop />}
          />
          <Route path="/mapquiz" element={<MapQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
