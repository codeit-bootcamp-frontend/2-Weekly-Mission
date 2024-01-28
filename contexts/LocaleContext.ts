import { createContext } from "react";
import { ModalControl, FolderInfo, UserInfo } from "../types/common";

export const FolderDataContext = createContext();
export const DataContext = createContext<FolderInfo | UserInfo>();
export const FolderSelectDataContext = createContext();
export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {}
});
