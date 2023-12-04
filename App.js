import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Folder from "./pages/Folder";
import "./color.css";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
