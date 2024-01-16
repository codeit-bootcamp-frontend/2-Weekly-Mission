import Gnb from "@/components/commons/Gnb";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Footer from "@/components/commons/Footer";
import ModalPortal from "@/lib/Portal";
import useModal from "@/lib/useModal";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { Modal } = useModal();
  const router = useRouter();

  // Check if the current route starts with '/auth'
  const isAuthRoute = router.pathname.startsWith("/auth");

  return (
    <>
      <div id="modal-root">
        <ModalPortal>
          <Modal />
        </ModalPortal>
        {!isAuthRoute && <Gnb />}
        <Component {...pageProps} />
        {!isAuthRoute && <Footer />}
      </div>
    </>
  );
}
