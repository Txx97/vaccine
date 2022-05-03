import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/Forms/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Hompage";
import AdministerVaccination from "./components/AdministerVaccination/AdministerVaccination";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/administerVaccination" element={<AdministerVaccination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
