import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'
import Home from "./pages/Home";
import Test from "./pages/Test";
import Recoil from "./pages/Recoil";
import UtilTest from "./pages/UtilTest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/recoil" element={<Recoil />} />
            <Route path="/util" element={<UtilTest />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
