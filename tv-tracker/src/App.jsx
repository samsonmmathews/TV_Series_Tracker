// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SeriesList from "./components/SeriesList/SeriesList";
import CompaniesList from "./pages/CompaniesList/CompaniesList";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import AddSeriesPage from "./pages/AddSeriesPage/AddSeriesPage";
import EditSeriesPage from "./pages/EditSeriesPage/EditSeriesPage";

function App() {
  return (
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
  )
}

export default App
