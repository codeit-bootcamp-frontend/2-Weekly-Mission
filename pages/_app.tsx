import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import { getUserData } from "./api/SharedApi";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import { UserInfo } from "../types/common";
import useModal from "../hook/useModal";
import { modals } from "../utils/modalList";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [user, setUser] = useState<UserInfo>({
    id: 1,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const Modal = modals.get(modal.name);
  const router = useRouter();
  const { signin } = router.query;
  const { signup } = router.query;
  useEffect(() => {
    getUserData().then(setUser);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ModalContext.Provider value={{ openModal, closeModal }}>
        {modal.isOpen && Modal ? <Modal onConfirm={closeModal} /> : null}
        {{ signin } || { signup } ? null : <Header user={user} />}
        <Component closeModal={closeModal} {...pageProps} />
        {{ signin } || { signup } ? null : <Footer />}
      </ModalContext.Provider>
    </>
  );
}
