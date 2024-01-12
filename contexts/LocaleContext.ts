import { createContext } from "react";
import { SharedPageData, FolderPageData, ModalControl } from "../types/common";

export type LocaleContextType = SharedPageData | FolderPageData[] | SharedPageData[];

export const LocaleContext = createContext<LocaleContextType>([]);
export const ModalContext = createContext<ModalControl>({
  openModal: () => {},
  closeModal: () => {},
});
