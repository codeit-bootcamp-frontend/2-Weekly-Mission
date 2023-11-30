import Card from "./Card";
import FolderOwner from "./FolderOwner";
import SearchBar from "./SearchBar";
import '../styles/Folder.css';
import { useFolder } from "../hooks/useFolder";

const INITIAL_FOLDER_VALUE = {
  links:[],
  name:'',
  owner: {
    name:'',
    profileImageSource:''
  }
};

const FolderLayout = () => {
  const folder = useFolder(INITIAL_FOLDER_VALUE);
  const { owner, name, links } = folder;

  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name} />
      <SearchBar/>
      <section className="card--section">
        {links.map((link) => <Card key={link.id} link={link} />)}
      </section>
    </main>
  )
};

export default FolderLayout
