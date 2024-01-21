import { createContext } from "react";
import { SharedPageData, FolderPageData, ModalControl } from "../types/common";

export const FolderDataContext = createContext();
export const SharedDataContext = createContext();
export const FolderSelectDataContext = createContext();
export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {}
});
