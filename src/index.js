import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FolderPage from "./folderPage/FolderPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
