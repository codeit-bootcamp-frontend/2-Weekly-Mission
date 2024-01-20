import { createContext } from "react";
import { SharedPageData, FolderPageData, ModalControl } from "../types/common";

export const FolderDataContext = createContext<FolderPageData[]>([]);
export const SharedDataContext = createContext<SharedPageData>(
  {} as SharedPageData
);

export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {}
});
