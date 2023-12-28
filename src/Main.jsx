import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder/:id" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
