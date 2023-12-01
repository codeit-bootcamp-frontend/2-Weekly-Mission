import { useState, useEffect } from "react";
import { FOLDER_PAGE_API_URL } from "../constants/constants";
import axios from "axios";

const Test = () => {
  const [user, setUser] = useState([]);
  const [folder, setFolder] = useState([]);
  const [link, setLink] = useState([]);

  const getUser = async() => {
    try{
      const response = await axios.get(`${FOLDER_PAGE_API_URL}/1`);
      setUser(response.data.data[0]);
    } catch(error){
      console.log(error);
      setUser('no');
    }
  }
  const getFolder = async() => {
    try{
      const response = await axios.get(`${FOLDER_PAGE_API_URL}/1/folders`);
      setFolder(response.data.data);
    } catch(error){
      console.log(error);
      setFolder('no');
    }
  }
  const getLink = async() => {
    try{
      const response = await axios.get(`${FOLDER_PAGE_API_URL}/1/links`);
      setLink(response.data.data);
    } catch(error){
      console.log(error);
      setLink('no');
    }
  }

  useEffect(() => {
    getUser();
    getFolder();
    getLink();
  },[]);

  useEffect(() => {
    console.log('user확인용');
    console.log(user);
    console.log('folder 확인용');
    console.log(folder);
    console.log('link 확인용');
    console.log(link);
  }, [user, folder, link])

  return(
    <div>
      <div>USER?</div>
      <div>{user?.name}</div>
      <div>FOLDER?</div>
      {/* <div>{folder}</div> */}
      <div>LINK?</div>
      {/* <div>{link}</div> */}
    </div>
  )
};

export default Test;
