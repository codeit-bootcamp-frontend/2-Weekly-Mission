import { createContext } from "react";
import { OpenModal, CloseModal, SharedPageData, FolderPageData } from "../types/common";

export type LocaleContextType = SharedPageData | FolderPageData[] | SharedPageData[];

export const LocaleContext = createContext<LocaleContextType>([]);
export const ModalContext = createContext<OpenModal | CloseModal>();
