import { useState, useCallback } from "react";
import { Modal } from "../types/common";

const useModal = () => {
  const [modal, setModal] = useState<Modal>({
    name: "",
    isOpen: false,
  });

  const openModal = useCallback((text: string) => {
    setModal({ ...modal, name: text, isOpen: true });
  }, []);
  const closeModal = useCallback(() => {
    setModal({ ...modal, isOpen: false });
  }, []);

  return {
    modal,
    openModal,
    closeModal,
  };
};

export default useModal;
