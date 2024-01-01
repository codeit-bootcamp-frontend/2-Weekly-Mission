import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Test from "./components/Test";
import SharedPage from "./components/Page/SharedPage";
import FolderPage from "./components/Page/FolderPage";
import './App.css';
import EditModal from "./components/Modal/EditModal";
import DeleteModal from "./components/Modal/DeleteModal";
import ShareModal from "./components/Modal/ShareModal";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/shared" element={<SharedPage/>} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path='/edit' element={<EditModal title={'test'} button={'test'} onClick={null}/>} />
          <Route path='/delete' element={<DeleteModal />} />
          <Route path='/share' element={<ShareModal />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
