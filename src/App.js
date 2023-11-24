import axios from 'axios';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { API_URL } from './constants/constants';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  const getUser = async() => {
    try{
      const response = await axios.get(`${API_URL}/user`);
      setUser(response.data);
      console.log(response.data);
    } catch(error) {
      console.log(error);
      setUser(null);
    }
  }

  useEffect(() => {
    getUser();
  },[])

  return (
    <div className="App">
      <Nav profile={user}/>
      <Footer/>
    </div>
  );
}

export default App;
