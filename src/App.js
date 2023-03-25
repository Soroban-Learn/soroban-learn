import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import Learn from "./Pages/Learn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
