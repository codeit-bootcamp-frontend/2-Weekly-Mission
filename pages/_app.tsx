import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import useModal from "../hook/useModal";
import { modals } from "../components/commons/modals/modalList";
import { NextRouter, useRouter } from "next/router";
import { getFolderData, getOwnerData } from "./api/PageApi";
import { PageUserInfo, PageFolderInfo } from "../types/common";
import { DataContext } from "../contexts/LocaleContext";
import { ParsedUrlQuery } from "querystring";

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [folderInfo, setFolderInfo] = useState<PageFolderInfo[]>([]);
  const [userInfo, setUserInfo] = useState<PageUserInfo[]>([]);

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
  };

  useEffect(() => {
    if (folderId) {
      handleFolderInfoLoad();
    }
  }, [folderId]);

  return (
    <>
      <GlobalStyle />
      <DataContext.Provider value={{ folderInfo, userInfo }}>
        <ModalContext.Provider value={{ openModal, closeModal }}>
          {modal.isOpen && Modal ? <Modal onConfirm={closeModal} /> : null}
          {pathname !== "/signin" && pathname !== "/signup" ? <Header /> : null}
          <Component closeModal={closeModal} {...pageProps} />
          {pathname !== "/signin" && pathname !== "/signup" ? <Footer /> : null}
        </ModalContext.Provider>
      </DataContext.Provider>
    </>
  );
}
