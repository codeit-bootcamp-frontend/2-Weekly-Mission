import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import Footer from "./components/Footer";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />}/>
        <Route path="/folder" element={<FolderPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
