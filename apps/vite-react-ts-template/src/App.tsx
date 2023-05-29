import "./App.css";
import React, { Suspense, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'
import Home from "./pages/Home";
import Test from "./pages/Test";
import Recoil from "./pages/Recoil";
import UtilTest from "./pages/UtilTest";
import Jotai from "./pages/Jotai";
import JotaiSelf from "./pages/Jotai/JotaiSelf";
import Detail from "./pages/Detail";
import Charts from "./pages/charts";
import { reducer } from "./store/reducer";
import { Context } from "./store/context";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div className="App">
      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/recoil" element={<Recoil />} />
              <Route path="/util" element={<UtilTest />} />
              <Route path="/jotai" element={<Jotai />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/jotaiself" element={<JotaiSelf />} />
              <Route path="/charts" element={<Charts />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
