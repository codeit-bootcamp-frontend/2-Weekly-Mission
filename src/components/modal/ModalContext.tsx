import { createContext } from 'react';

interface ModalContext {
  modalOpen: boolean;
  type: string;
  cardUrl?: string;
  handleClickModalOpen: (buttonId: string, cardUrl?: string) => void;
  handleClickModalClose: () => void;
}

const ModalContext = createContext<ModalContext>({
  modalOpen: false,
  type: '',
  cardUrl: '',
  handleClickModalOpen: () => {},
  handleClickModalClose: () => {},
});

export default ModalContext;
