import { List, ListContainer, ListUl } from "./ListCss";
import ListAddImg from "../../img/add.png";

function FolderList({ useFolderList }) {
  const Menu = "전체";
  return (
    <>
      <ListContainer>
        <ListUl>
          <List>{Menu}</List>
          {useFolderList.map((items) => (
            <List key={items.id}>{items.name}</List>
          ))}
        </ListUl>
        <img src={ListAddImg} alt="리스트추가버튼" />
      </ListContainer>
      <h1>{Menu}</h1>
    </>
  );
}

export default FolderList;
