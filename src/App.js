import { Routes, Route } from "react-router-dom";

import { RecoilRoot } from "recoil";

import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import Learn from "./Pages/Learn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/intro" element={<Intro />} />
          <Route exact path="/exercise/hello-world" element={<Learn />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
