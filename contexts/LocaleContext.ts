import { createContext } from "react";
import { OpenModal } from "../types/common";

export const LocaleContext = createContext();
export const ModalContext = createContext<OpenModal>();
