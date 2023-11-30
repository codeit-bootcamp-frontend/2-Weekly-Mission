import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from '../constants/constants';

export function useUser(initialValue){
  const [user, setUser] = useState(initialValue);

  const getUser = async() => {
    try{
      const response = await axios.get(`${API_URL}/user`);
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
