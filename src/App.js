import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import './resources/css/custom.css';
import ListAll from "./ListAll";
import GetDetails from "./GetDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route exact path="/get-details" element={<GetDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
