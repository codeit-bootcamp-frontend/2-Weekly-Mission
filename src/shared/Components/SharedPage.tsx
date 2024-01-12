import { useSharedPageFolder } from "@/src/shared/hooks/sharedPageHooks";
import LinkCard from "@/src/common/Components/LinkCard/LinkCard";
import FolderOwner from "@/src/shared/Components/FolderOwner";
import SearchBar from "@/src/common/Components/SearchBar/SearchBar";
import style from './Folder.module.css';
import { LinkType, OwnerType } from '@/types/type';


const SharedPage = () => {
  const folder = useSharedPageFolder();

  if(!folder) return;
  
  const { owner, name, links } : {owner:OwnerType, name:string, links:LinkType[]} = folder;

  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name} />
      <SearchBar/>
      <section className={style['card--section']}>
        {links.map((link) => <LinkCard key={link.id} link={link} />)}
      </section>
    </main>
  )
};

export default SharedPage
