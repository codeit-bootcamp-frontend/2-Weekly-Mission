import { createContext } from "react";
import { OpenModal, SharedPageData, FolderPageData } from "../types/common";

export type LocaleContextType = SharedPageData[] | FolderPageData[];

export const LocaleContext = createContext<LocaleContextType>([]);
export const ModalContext = createContext<OpenModal>();
