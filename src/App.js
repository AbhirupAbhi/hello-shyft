import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import './resources/css/custom.css';
import ListAll from "./ListAll";
import GetDetails from "./GetDetails";
import CustomLogin from "./CustomLogin";
import SamplePage from "./SamplePage";
import Create from "./Create";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route exact path="/get-details" element={<GetDetails />} />
          <Route exact path="/nft-login" element={<CustomLogin />} />
          <Route exact path="/sample-page" element={<SamplePage />} />
          <Route exact path="/create-new" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
