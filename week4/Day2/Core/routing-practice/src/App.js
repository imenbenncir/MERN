import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Number from "./components/Number";
import WordPage  from "./components/WordPage"
import ColorWord from "./components/ColorWord";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/hello" element={<WordPage />} />
        <Route path="/hello/:word/:textColor/:bgColor" element={<ColorWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;