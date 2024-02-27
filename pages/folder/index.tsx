import { useState } from "react";
import AddLinkBanner from "../../components/domains/folder/AddLinkBanner";
import CardList from "../../components/commons/CardList";
import SearchInput from "../../components/commons/SearchInput";
import styles from "../../styles/folderPage.module.css";
import FolderBadgeList from "../../components/domains/folder/FolderBadgeList";
import FolderTitles from "../../components/domains/folder/folderTitle/FolderTitles";
import FloatingButton from "../../components/domains/folder/FloatingButton";
import { Link } from "../../types/common";
import { FolderDataContext, ModalContext } from "../../contexts/LocaleContext";
import { getAllLinkData, getAllFolderData } from "../api/FolderApi";
import { useQuery } from "@tanstack/react-query";
import Modal from "../../components/commons/modals";
import ModalPortal from "../../components/commons/modals/ModalPortal";
import { useContext } from "react";

function FolderPage() {
  const [searchLinks, setSearchLinks] = useState<Link[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { modal } = useContext<ModalControl>(ModalContext);

  // const handleFolderListLoad = async () => {
  //   const allLinksFolder = {
  //     id: 0,
  //     name: "전체",
  //     user_id: 1
  //   };
  //   const { data: folder } = await getAllFolderData();
  //   setFolderListInfo([allLinksFolder, ...folder.folder]);
  // };

  const { data: allLink } = useQuery({
    queryKey: ["allLink "],
    queryFn: async () => {
      const response = await getAllLinkData();
      return response;
    }
  });

  const { data: folderList } = useQuery({
    queryKey: ["folderList"],
    queryFn: async () => {
      const response = await getAllFolderData();
      return response;
    }
  });

  // console.log(folderList, allLink);

  // const searchLink = async (keyword: string) => {
  //   const filteredLinks = folderAllLinkInfo.filter(
  //     (link: Link) =>
  //       link.url?.includes(keyword) ||
  //       link.title?.includes(keyword) ||
  //       link.description?.includes(keyword)
  //   );
  //   setSearchLinks(filteredLinks);
  // };

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (!accessToken) {
  //     router.push("/signin");
  //   }
  // }, []);

  return (
    <FolderDataContext.Provider
      value={{
        allLink,
        folderList
      }}
    >
      <AddLinkBanner />
      <section className={styles.contentFlex}>
        <div className={styles.contentBox}>
          <SearchInput
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
          <FolderBadgeList />
          <FolderTitles searchKeyword={searchKeyword} />
          <CardList links={searchKeyword == "" ? allLink : searchLinks} />
        </div>
      </section>
      <FloatingButton />
      {modal?.isOpen ? (
        <ModalPortal>
          <Modal title={modal?.title} />
        </ModalPortal>
      ) : null}
    </FolderDataContext.Provider>
  );
}

export default FolderPage;
