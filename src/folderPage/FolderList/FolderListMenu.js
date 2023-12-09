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

// function Main({ links }) {
//   //porps를 내려줄때 item={item 말고} {...item}으로 가능하군요..!
//   return links?.map((item) => <MainLink {...item} />);
// }
