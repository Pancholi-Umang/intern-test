import "./App.css";
import First from './figma/First';
import Second from './figma/Second';
import Third from './figma/Third';
import Figma from './figma/Figma';
import FetchApi from './FetchGiphy/FetchApi'
import Form from './forms/Form'
import Home from "./Home";
import Favourite from "./favourit/Favourite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/figma" element={<Figma />} />
        <Route exact path="/first" element={<First />} />
        <Route exact path="/second" element={<Second />} />
        <Route exact path="/third" element={<Third />} />
        <Route exact path="/fetchapi" element={<FetchApi />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/third" element={<Third />} />
        <Route exact path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}  

export default App;
