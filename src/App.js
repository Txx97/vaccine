import logo from "./logo.svg";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/Forms/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Forms/Navbar";
import Homepage from "./components/Hompage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
