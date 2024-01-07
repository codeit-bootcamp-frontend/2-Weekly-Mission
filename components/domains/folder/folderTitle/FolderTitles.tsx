import CategoryBox from "./CategoryBox";

interface Link {
  id: number;
  create_at: string;
  image_source: string;
  title: string;
  url: string;
}

interface FolderInfo {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: Link[];
}

function FoldersTitles({
  folderList,
  id,
  openModal,
}: {
  folderList: FolderInfo[];
  id: number;
  openModal: (buttonText: string) => void;
}) {
  return (
    folderList?.length > 0 &&
    folderList.map((folder) => {
      if (folder.id === id) {
        return (
          <CategoryBox key={folder.id} folder={folder} openModal={openModal} />
        );
      }
      return null;
    })
  );
}

export default FoldersTitles;
