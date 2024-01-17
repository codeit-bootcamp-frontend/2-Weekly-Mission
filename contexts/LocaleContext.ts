import { createContext } from "react";
import { SharedPageData, FolderPageData, ModalControl } from "../types/common";

export type DataContextType =
  | SharedPageData
  | FolderPageData[]
  | SharedPageData[];

export const DataContext = createContext<DataContextType>([]);
export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {}
});
