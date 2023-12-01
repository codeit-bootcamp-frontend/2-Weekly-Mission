import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import Folder from './pages/Forder';
import App from './components/App';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/shared" element={<Shared />}></Route>
          <Route path="/folder" element={<Folder />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
