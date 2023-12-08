import "../styles/Sort.css"
import trash from "../assets/trash.png"
import pen from "../assets/pen.png"
import share from "../assets/share.png"
import styled from "styled-components"
import { useEffect, useState } from "react"


async function getFetchFolders() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders",
  );
  const body = await response.json();

  return body;
}

const Button = styled.button`
border-radius: 5px;
  border: 1px solid #6D6AFE;
  background: #FFF;
  padding: 8px 12px`;

function Sort({handleClickAll, handleClickButton}){

  const [folders, setFolders] = useState([]);

  const getFolders = async () => {
    const {data} = await getFetchFolders();

    setFolders(data)
  }

    useEffect(() => {
      getFolders();
    }, []);

  return(
    <section>
       <div className="sort-bar">
        <Button onClick={handleClickAll}>전체</Button>
        {
          folders?.map((it) => (
            <button key={it.id} onClick={
              () =>handleClickButton(it.id)
            }>{it.name}</button>
          ))
        }
        
      </div>
      <div className="sort-edit-bar">
      <h1>유용한 글</h1>
      <div className="sort-edit-buttons">

        <button className="sort-edit-button"><img className="icon" src={share} alt="share"/>공유</button>
        <button className="sort-edit-button"><img className="icon" src={pen} alt="pen"/>이름 변경</button>
        <button className="sort-edit-button"><img className="icon" src={trash} alt="trashcan"/>삭제</button>
      </div>
      </div>
      
    </section>
   
  )
}

export default Sort