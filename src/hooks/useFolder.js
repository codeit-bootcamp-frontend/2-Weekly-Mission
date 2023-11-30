import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from '../constants/constants';

export function useFolder(initialValue){
  const [folder, setFolder] = useState(initialValue);

  const getFolder = async() => {
    try{
      const response = await axios.get(`${API_URL}/folder`);
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
