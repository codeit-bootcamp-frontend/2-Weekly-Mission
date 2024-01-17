import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import { getUserData } from "./api/SharedApi";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import { UserInfo } from "../types/common";
import useModal from "../hook/useModal";
import { modals } from "../components/commons/modals/modalList";
import { NextRouter, useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { modal, openModal, closeModal } = useModal();
  const [user, setUser] = useState<UserInfo>({
    id: 1,
    name: "",
    email: "",
    profileImageSource: ""
  });

  const router: NextRouter = useRouter();
  const pathname = router.pathname;
  const Modal = modals.get(modal.name);

  useEffect(() => {
    getUserData().then(setUser);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ModalContext.Provider value={{ openModal, closeModal }}>
        {modal.isOpen && Modal ? <Modal onConfirm={closeModal} /> : null}
        {pathname !== "/signin" && pathname !== "/signup" ? (
          <Header user={user} />
        ) : null}
        <Component closeModal={closeModal} {...pageProps} />
        {pathname !== "/signin" && pathname !== "/signup" ? <Footer /> : null}
      </ModalContext.Provider>
    </>
  );
}
