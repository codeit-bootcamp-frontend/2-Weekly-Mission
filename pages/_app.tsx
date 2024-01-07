import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
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
      {modal.name === "폴더추가" && modal.isOpen ? (
        <FolderAddInputModal closeModal={closeModal} />
      ) : modal.name === "이름 변경" && modal.isOpen ? (
        <FolderNameChangeModal closeModal={closeModal} />
      ) : modal.name === "삭제" && modal.isOpen ? (
        <FolderDeleteModal closeModal={closeModal} />
      ) : modal.name === "링크삭제" && modal.isOpen ? (
        <LinkDeleteModal closeModal={closeModal} />
      ) : modal.name === "공유" && modal.isOpen ? (
        <FolderSharedModal closeModal={closeModal} />
      ) : modal.name === "폴더에 추가" && modal.isOpen ? (
        <LinkAddModal closeModal={closeModal} />
      ) : null}
      <Header user={user} />
      <Component openModal={openModal} closeModal={closeModal} {...pageProps} />
      <Footer />
    </>
  );
}
