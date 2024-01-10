import { useEffect, useState } from "react";
import { getFolders } from "@/lib/api";
import FolderButton from "./FolderButton";
import FolderCardList from "./FolderCardList";
import Option from "./Option";
import { FolderData, LinkData } from "@/lib/utils/type";
import SearchBar from "../../commons/SearchBar";
import styles from "./FolderLists.module.css";
import Image from "next/image";

interface SelectedFolder {
  id: number | null;
  name: string;
  link?: LinkData[];
}

function FolderLists() {
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selected, setSelected] = useState<SelectedFolder>({
    id: null,
    name: "전체",
    link: [],
  });
  const [search, setSearch] = useState<string>("");
  const [filteredLinks, setFilteredLinks] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders(folder.data);
    };

    fetchFolders();
  }, []);

  const isFolderSelected = selected.id !== null && selected.name !== "전체";

  const handleSearchChange = (searchValue: string) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    console.log("useEffect is being called");
    console.log("Search:", search);
    console.log("Selected Links:", selected.link);

    const lowerCasedValue = search.toLowerCase();
    if (search) {
      const filtered = (selected.link ?? []).filter((link) => {
        const shouldInclude =
          (link.url && link.url.includes(lowerCasedValue)) ||
          (link.title && link.title.includes(lowerCasedValue)) ||
          (link.description && link.description.includes(lowerCasedValue));

        return shouldInclude;
      });
      setFilteredLinks(filtered);
    } else {
      // 검색어가 없을 경우, 선택한 폴더의 링크. selected.link 대신에 selected.link를 사용.
      setFilteredLinks(selected.link ?? []);
    }
  }, [search, selected.link]);

  const handleFolderClick = ({ folderId, folderName }: { folderId: number | null; folderName: string }) => {
    setSelected({ id: folderId, name: folderName, link: [] });
  };

  return (
    <>
      <SearchBar onSearchChange={handleSearchChange} />
      <div className={styles.folders}>
        <div className={styles.foldersTop}>
          <div className={styles.folderButtons}>
            <FolderButton folderName="전체" onFolderClick={handleFolderClick} isActive={selected.id === null} />
            {folders.map((folder) => (
              <FolderButton
                key={folder.id}
                folderId={folder.id}
                folderName={folder.name}
                onFolderClick={handleFolderClick}
              />
            ))}
          </div>
          <Image src="/images/folder/add-icon.svg" width={16} height={16} alt="add icon" />
        </div>
        <div className={styles.nameAndOption}>
          <div className={styles.folderName}>{selected.name}</div>
          {isFolderSelected ? <Option folderName={selected.name} folderId={selected.id} /> : null}
        </div>
        <FolderCardList folderId={selected.id} link={filteredLinks} />
      </div>
    </>
  );
}

export default FolderLists;
