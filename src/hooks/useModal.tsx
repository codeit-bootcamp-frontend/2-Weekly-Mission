import { MouseEventHandler, RefObject, useRef } from 'react';

const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal: MouseEventHandler<HTMLButtonElement> = () => {
    if (!modalRef.current) return;
    modalRef.current.showModal();
  };

  const closeModal: MouseEventHandler<HTMLButtonElement> = () => {
    if (!modalRef.current) return;
    modalRef.current.close();
  };

  return [modalRef, openModal, closeModal] as [
    RefObject<HTMLDialogElement>,
    MouseEventHandler<HTMLButtonElement>,
    MouseEventHandler<HTMLButtonElement>,
  ];
};

export default useModal;
