import AddLinkForm from "../AddLinkForm";
import '../../styles/Folder.css';
import SearchBar from "../SearchBar";

const FolderPage = () => {
  return(
    <main className="contents folder-link--main">
      <AddLinkForm />
      <SearchBar/>
      {/* <FolderOwner owner={owner} name={name} />
      <section className="card--section">
        {links.map((link) => <Card key={link.id} link={link} />)}
      </section> */}
    </main>
  )
};

export default FolderPage;
