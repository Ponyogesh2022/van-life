import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./Components/Ui/About";
import Home from "./Components/Ui/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
