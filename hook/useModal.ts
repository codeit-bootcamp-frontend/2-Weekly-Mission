import { useState, useCallback } from "react";

const useModal = () => {
  const [modal, setModal] = useState({
    name: "",
    isOpen: false,
  });

  const openModal = useCallback((buttonText: string) => {
    setModal({ ...modal, name: buttonText, isOpen: true });
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
