import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import { getUserData } from "./api/SharedApi";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import { UserInfo } from "../types/common";
import useModal from "../hook/useModal";
import FolderAddInputModal from "../components/commons/modals/FolderAddInputModal";
import FolderNameChangeModal from "../components/commons/modals/FolderNameInputModal";
import FolderDeleteModal from "../components/commons/modals/FolderDeleteModal";
import LinkDeleteModal from "../components/commons/modals/LinkDeleteModal";
import FolderSharedModal from "../components/commons/modals/FolderSharedModal";
import LinkAddModal from "../components/commons/modals/LinkAddModal";

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [user, setUser] = useState<UserInfo>({
    id: 1,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const handleEmailLoad = async () => {
    const data = await getUserData();
    setUser(data);
  };

  useEffect(() => {
    handleEmailLoad();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ModalContext.Provider value={{ openModal, closeModal }}>
        {modal.name === "폴더추가" && modal.isOpen ? (
          <FolderAddInputModal onConfirm={closeModal} />
        ) : modal.name === "이름 변경" && modal.isOpen ? (
          <FolderNameChangeModal onConfirm={closeModal} />
        ) : modal.name === "삭제" && modal.isOpen ? (
          <FolderDeleteModal onConfirm={closeModal} />
        ) : modal.name === "링크삭제" && modal.isOpen ? (
          <LinkDeleteModal onConfirm={closeModal} />
        ) : modal.name === "공유" && modal.isOpen ? (
          <FolderSharedModal onConfirm={closeModal} />
        ) : modal.name === "폴더에 추가" && modal.isOpen ? (
          <LinkAddModal onConfirm={closeModal} />
        ) : null}
        <Header user={user} />
        <Component closeModal={closeModal} {...pageProps} />
        <Footer />
      </ModalContext.Provider>
    </>
  );
}
