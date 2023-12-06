import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./Pages/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
