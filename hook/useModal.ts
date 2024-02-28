import { useState, useCallback } from "react";
import { Modal } from "../types/common";

const useModal = () => {
  const [modal, setModal] = useState<Modal>({
    title: "",
    isOpen: false
  });

  const textList = {
    추가하기: "폴더에 추가",
    "폴더 추가": "폴더 추가",
    "이름 변경": "폴더 이름 변경",
    삭제: "폴더 삭제",
    공유: "폴더 공유",
    삭제하기: "링크 삭제"
  };

  const openModal = useCallback((text: string) => {
    setModal({ ...modal, title: textList[text], isOpen: true });
  }, []);
  const closeModal = useCallback(() => {
    setModal({ ...modal, isOpen: false });
  }, []);

  return {
    modal,
    openModal,
    closeModal
  };
};

export default useModal;
