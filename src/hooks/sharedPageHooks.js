import { useEffect, useState } from "react";
import axios from 'axios';
import { SHARED_PAGE_API_URL } from '../constants/constants';

export function useSharedPageUser(initialValue){
  const [user, setUser] = useState(initialValue);

  const getUser = async() => {
    try{
      const response = await axios.get(`${SHARED_PAGE_API_URL}/user`);
      const user = await response.data;
      setUser(user);
    } catch(error) {
      alert(error)
      setUser(initialValue);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return user;
}

export function useSharedPageFolder(initialValue){
  const [folder, setFolder] = useState(initialValue);

  const getFolder = async() => {
    try{
      const response = await axios.get(`${SHARED_PAGE_API_URL}/folder`);
      const { folder } = await response.data;
      setFolder(folder);
    } catch(error) {
      alert(error)
      setFolder(initialValue);
    }
  }

  useEffect(() => {
    getFolder();
  }, []);

  return folder;
}
