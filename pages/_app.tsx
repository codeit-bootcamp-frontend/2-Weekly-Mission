import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import useModal from "../hook/useModal";
import { modals } from "../components/commons/modals/modalList";
import { NextRouter, useRouter } from "next/router";
import { getFolderData, getOwnerData, getLinkData } from "./api/SharedApi";
import { UserInfo, FolderInfo, Link } from "../types/common";
import { DataContext } from "../contexts/LocaleContext";
import { ParsedUrlQuery } from "querystring";
import { getAllLinkData, getAllFolderData } from "./api/FolderApi";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [folderInfo, setFolderInfo] = useState<FolderInfo[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [sharedLinkInfo, setSharedLinkInfo] = useState<Link[]>([]);
  const [folderAllLinkInfo, setFolderAllLinkInfo] = useState<Link[]>([]);
  const [folderListInfo, setFolderListInfo] = useState<Link[]>([]);

  const router: NextRouter = useRouter();
  const pathname = router.pathname;
  const Modal = modals.get(modal.name);
  const { folderId }: ParsedUrlQuery = router.query;

  const handleFolderInfoLoad = async () => {
    const { data } = await getFolderData(folderId as string);
    setFolderInfo(data);

    if (data && data.length > 0 && data[0].user_id) {
      handleUserInfoLoad(data[0].user_id);
    }
  };

  const handleUserInfoLoad = async (userId: number) => {
    const { data } = await getOwnerData(userId);
    setUserInfo(data[0]);
    handleSharedLinksInfoLoad(data[0].id, folderId as string);
  };

  const handleSharedLinksInfoLoad = async (
    userId: number,
    folderId: string
  ) => {
    const { data } = await getLinkData(userId, folderId);
    setSharedLinkInfo(data);
  };

  // const handleFolderListLoad = async () => {
  //   const allLinksFolder = {
  //     id: 0,
  //     name: "전체",
  //     user_id: 1
  //   };
  //   const { data: folder } = await getAllFolderData();
  //   setFolderListInfo([allLinksFolder, ...folder.folder]);
  // };

  // const handleAllLinkLoad = async () => {
  //   const { data: folder } = await getAllLinkData();
  //   setFolderAllLinkInfo(folder.folder);
  // };

  useEffect(() => {
    // handleFolderListLoad();
    // handleAllLinkLoad();
    if (folderId) {
      handleFolderInfoLoad();
    }
  }, [folderId]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <DataContext.Provider
        value={{
          folderInfo,
          userInfo,
          sharedLinkInfo,
          setSharedLinkInfo,
          folderAllLinkInfo,
          folderListInfo
        }}
      >
        <ModalContext.Provider value={{ openModal, closeModal }}>
          {modal.isOpen && Modal ? <Modal onConfirm={closeModal} /> : null}
          {pathname !== "/signin" && pathname !== "/signup" ? <Header /> : null}
          <Component closeModal={closeModal} {...pageProps} />
          {pathname !== "/signin" && pathname !== "/signup" ? <Footer /> : null}
        </ModalContext.Provider>
      </DataContext.Provider>
    </QueryClientProvider>
  );
}
