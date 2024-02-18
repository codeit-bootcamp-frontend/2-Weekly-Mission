import React, { createContext, useContext, ReactNode, useState } from "react";
import Portal from "@/components/common/Modal/Portal";
import Modal from "@/components/common/Modal";
import { MODAL_TYPE } from "@/lib/constents";

export type ModalContentProps = {
  currentType: keyof typeof MODAL_TYPE;
  [key: string]: any; // 추가적인 props
};

interface ModalContextType {
  isModalVisible: boolean;
  modalContent: ModalContentProps | null;
  openModal: (content: ModalContentProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentProps | null>(null);

  const openModal = (content: ModalContentProps) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalVisible(false);
  };

  const contextValue = {
    isModalVisible,
    modalContent,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isModalVisible && modalContent && (
        <Portal>
          <Modal modalContent={modalContent} onClose={closeModal} />
        </Portal>
      )}
    </ModalContext.Provider>
  );
}
