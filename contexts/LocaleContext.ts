import { createContext } from "react";
import { ModalControl, PageFolderInfo } from "../types/common";

export const FolderDataContext = createContext();
export const DataContext = createContext<PageFolderInfo>();
export const FolderSelectDataContext = createContext();
export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {}
});
