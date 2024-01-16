import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SharedPage from "./Pages/SharedPage.jsx";
import FolderPage from "./Pages/FolderPage.jsx";
import FooterSection from "./Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/folder" />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
