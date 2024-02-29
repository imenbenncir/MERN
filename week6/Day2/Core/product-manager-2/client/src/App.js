
import OneProduct from "./components/OneProduct"
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom"
import './App.css';



function App() {
  return (
        <div className="App">
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/products/:id" element={<OneProduct />} />
          </Routes >
        </div>
  );
}

export default App;
