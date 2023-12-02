import { Folder } from "./pages/Folder";
import { FolderNoLink } from "./pages/FolderNoLink";
import { Shared } from "./pages/Shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
        <Route path="*" element={<FolderNoLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
