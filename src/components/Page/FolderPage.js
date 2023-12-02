import AddLinkForm from "../AddLinkForm";
import '../../styles/Folder.css';
import SearchBar from "../SearchBar";
import NoLink from "../NoLink";
import FolderLists from "../FolderLists";
import Card from "../Card";
import FolderTitle from "../FolderTitle";
import { useFolderPageLink, useFolderPageFolder } from "../../hooks/folderPageHooks";
import { useEffect, useState } from "react";
import { FOLDER_PAGE_API_URL } from "../../constants/constants";
import axios from "axios";

const INITIAL_FOLDER_VALUE = {
  links:[],
  name:'',
  owner: {
    name:'',
    profileImageSource:''
  }
};

const all = {
  id: 0,
  name: '전체'
}

const FolderPage = () => {
  const [activeFolder, setActiveFolder] = useState(0);
  const folders =[all, ...useFolderPageFolder()];
  const [links, setLinks] = useState()

  const getLinkData = async (URL) => {
    try{
      const response = await axios.get(URL);
      setLinks(response.data.data);
    } catch(error){
      alert(error)
    }
  };
  
  const linkURL = (forderId) => {
    if(forderId === 0) return `${FOLDER_PAGE_API_URL}/1/links`;
    return `${FOLDER_PAGE_API_URL}/1/links?folderId=${forderId}`;
  }

  useEffect(() => {
    const url = linkURL(activeFolder);
    getLinkData(url);
  },[activeFolder])

  if(!folders) return;

  const handleActiveButton = (id) => {
    setActiveFolder(id);
  }

  return(
    <main className="contents folder-link--main">
      <AddLinkForm />
      <SearchBar/>
      {!links && <NoLink />}
      {links &&
        <>
          <FolderLists folders={folders} activeFolder={activeFolder} onClick={handleActiveButton}/>
          <FolderTitle folders={folders} activeFolder={activeFolder}/>
          {links.length === 0 && <NoLink />}
          <section className="card--section">
            {links?.map((link) => <Card key={link.id} link={link} />)}
          </section>
        </>
      }
    </main>
  )
};

export default FolderPage;
