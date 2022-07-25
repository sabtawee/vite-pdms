import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import McPage from "./pages/Mc/McPage";
import PcPage from "./pages/Pc/PcPage";
import QcPage from "./pages/Qc/QcPage";
import PrdPage from "./pages/Prd/PrdPage";
import EngPage from "./pages/Eng/EngPage";
import PePage from "./pages/Pe/PePage";
import SmartsetupPage from "./pages/Prd/SmartsetupPage";
import MmsPage from "./pages/Pe/MmsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/materialcontrol" element={<McPage />} />
        <Route path="/planningsystem" element={<PcPage />} />
        <Route path="/qualitycontrol" element={<QcPage />} />
        <Route path="/productiondepartment" element={<PrdPage />} />
        <Route path="/engineer" element={<EngPage />} />
        <Route path="/productionengineer" element={<PePage />} />
        <Route path="/smartsetup" element={<SmartsetupPage />} />
        <Route path="/monitoringmonitor" element={<MmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
