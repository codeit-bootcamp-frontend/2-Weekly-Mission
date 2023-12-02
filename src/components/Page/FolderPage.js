import AddLinkForm from "../AddLinkForm";
import '../../styles/Folder.css';
import SearchBar from "../SearchBar";
import NoLink from "../NoLink";
import FolderLists from "../FolderLists";
import { useSharedPageFolder } from "../../hooks/sharedPageHooks";
import Card from "../Card";
import FolderTitle from "../FolderTitle";

const INITIAL_FOLDER_VALUE = {
  links:[],
  name:'',
  owner: {
    name:'',
    profileImageSource:''
  }
};

const FolderPage = () => {
  const folder = useSharedPageFolder(INITIAL_FOLDER_VALUE);
  const { links } = folder;

  return(
    <main className="contents folder-link--main">
      <AddLinkForm />
      <SearchBar/>
      {/* <NoLink /> */}
      <FolderLists />
      <FolderTitle />
      <section className="card--section">
        {links.map((link) => <Card key={link.id} link={link} />)}
      </section>
    </main>
  )
};

export default FolderPage;
