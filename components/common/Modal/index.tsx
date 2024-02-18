import React from "react";
import * as S from "./styled";
import { MODAL_TYPE } from "@/lib/constents";
import Edit from "./Contents/Edit";
import AddLink from "./Contents/AddLink";
import Share from "./Contents/Share";
import DeleteFolder from "./Contents/DeleteFolder";
import DeleteLink from "./Contents/DeleteLink";
import CreateFolder from "./Contents/CreateFolder";

const ModalContents = {
  [MODAL_TYPE.edit]: Edit,
  [MODAL_TYPE.addtoFolder]: AddLink,
  [MODAL_TYPE.share]: Share,
  [MODAL_TYPE.delete]: DeleteFolder,
  [MODAL_TYPE.deleteLink]: DeleteLink,
  [MODAL_TYPE.add]: CreateFolder,
};

interface ModalProps {
  modalContent: {
    currentType: keyof typeof MODAL_TYPE;
    [key: string]: any;
  };
  onClose: () => void;
}

const Modal = ({ modalContent, onClose }: ModalProps) => {
  if (!modalContent) return null;

  const ContentComponent: React.ElementType = ModalContents[modalContent.currentType];
  const { currentType, ...otherProps } = modalContent;

  const stopEventBubbling = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <S.BackGround onClick={onClose}>
      <S.ContentWrapper onClick={stopEventBubbling}>
        <S.ContentItem>
          <S.Close onClick={onClose} />
          <ContentComponent onClose={onClose} {...otherProps} />
        </S.ContentItem>
      </S.ContentWrapper>
    </S.BackGround>
  );
};

export default Modal;
