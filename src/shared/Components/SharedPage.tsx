import { useSharedPageFolder } from "@/src/shared/hooks/sharedPageHooks";
import FolderOwner from "@/src/shared/Components/FolderOwner";
import SearchBar from "@/src/common/Components/SearchBar/SearchBar";
import { LinkType, OwnerType } from '@/types/type';
import CardSection from "@/src/common/Components/CardSection/CardSection";


const SharedPage = () => {
  const folder = useSharedPageFolder();

  if(!folder) return;
  
  const { owner, name, links } : {owner:OwnerType, name:string, links:LinkType[]} = folder;

  return(
    <main className="contents folder-link--main">
      <FolderOwner owner={owner} name={name} />
      <SearchBar/>
      <CardSection links={links} />
    </main>
  )
};

export default SharedPage
