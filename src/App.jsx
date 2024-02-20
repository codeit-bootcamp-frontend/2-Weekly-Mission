import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Shared from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/folder' element={<FolderPage />}></Route>
        <Route path='/shared' element={<SharedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
