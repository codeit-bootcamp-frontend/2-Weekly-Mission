import Modal from "@/components/common/Modal";
import Portal from "@/components/common/Modal/Portal";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { useToggle } from "usehooks-ts";

interface ModalContextType {
  isModalVisible: boolean;
  modalContent: string;
  openModal: (content: string) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType>({
  isModalVisible: false,
  modalContent: "",
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalVisible, toggleModalVisible] = useToggle(false);
  const [modalContent, setModalContent] = useState<string>("");

  const openModal = (content: string) => {
    setModalContent(content);
    toggleModalVisible();
  };

  const closeModal = () => {
    setModalContent("");
    toggleModalVisible();
  };

  const contextValue: ModalContextType = {
    isModalVisible,
    modalContent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isModalVisible && (
        <Portal>
          <Modal currentType={modalContent} onClose={closeModal} />
        </Portal>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  return useContext(ModalContext);
};
