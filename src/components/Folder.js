import Card from "./Card";
import FolderOwner from "./FolderOwner";
import SearchBar from "./SearchBar";

const Folder = ({ owner, name, links }) => {
  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name}></FolderOwner>
      <SearchBar></SearchBar>
      {links.map((link) => <Card link={link}></Card>)}
    </main>
  )
};

export default Folder
