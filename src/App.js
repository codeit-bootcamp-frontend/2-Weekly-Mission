import axios from 'axios';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { API_URL } from './constants/constants';
import { useEffect, useState } from 'react';
import SubHeader from './components/SubHeader';
import Card from './components/Card';

const INITIAL_USER_VALUE = {
  email:'',
  id:0,
  name:'',
  profileImageSource:''
};
const INITIAL_FOLDER_VALUE = {
  links:[],
  name:'',
  owner: {
    name:'',
    profileImageSource:''
  }
};

function App() {
  const [user, setUser] = useState({});
  const [folder, setFolder] = useState({
    links:[],
    name:'',
    owner: {
      name:'',
      profileImageSource:''
    }
  });

  const getUser = async() => {
    try{
      const response = await axios.get(`${API_URL}/user`);
      const user = await response.data;
      setUser(user);
    } catch(error) {
      setUser(null);
    }
  }

  const getData = async() => {
    try{
      const response = await axios.get(`${API_URL}/folder`);
      const { folder } = await response.data;
      setFolder(folder);
      console.log(folder);
    } catch(error) {
      console.log(error);
      setFolder(null);
    }
  }
  
  useEffect(() => {
    getUser();
    getData()
  },[])

  useEffect(() => {
    console.log('user는?');
    console.log(user);
    console.log('folder는?');
    console.log(folder);
  }, [user, folder])

  return (
    <div className="App">
      <Nav profile={user}/>
      <SubHeader owner={folder.owner} name={folder.name}></SubHeader>
      <div>
        {folder.links.map((link) => <Card key={link.id} link={link}></Card>)}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
