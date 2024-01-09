import Gnb from "@/components/commons/Gnb";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Footer from "@/components/commons/Footer";
import ModalPortal from "@/lib/Portal";
import useModal from "@/lib/useModal";

export default function App({ Component, pageProps }: AppProps) {
  const { Modal } = useModal();
  return (
    <>
      <div id="modal-root">
        <ModalPortal>
          <Modal />
        </ModalPortal>
        <Gnb />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
