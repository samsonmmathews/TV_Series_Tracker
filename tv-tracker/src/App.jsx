import './App.css'
import { useEffect, useState } from "react";
import { getRandomBackground } from "./utils/backgrounds";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SeriesList from "./components/SeriesList/SeriesList";
import CompaniesList from "./pages/CompaniesList/CompaniesList";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import AddSeriesPage from "./pages/AddSeriesPage/AddSeriesPage";
import EditSeriesPage from "./pages/EditSeriesPage/EditSeriesPage";

function App() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage(getRandomBackground());
  }, []);

  return (
    <div className="app-background" style={{ backgroundImage: `url(${bgImage})` }} >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/series/add" element={<AddSeriesPage />} />
          <Route path="/series/edit/:seriesID" element={<EditSeriesPage />} />
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
