import "./App.css";
import Contacts from "./components/Contact";
import Edit from "./components/Edit";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Contacts />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
