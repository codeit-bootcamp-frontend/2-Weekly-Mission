import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/shared" element={<SharedPage />}/>
        <Route path="/folder" element={<FolderPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
