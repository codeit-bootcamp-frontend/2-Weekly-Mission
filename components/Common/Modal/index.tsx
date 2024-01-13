import React from "react";
import Edit from "./Contents/Edit";
import AddFolder from "./Contents/AddFolder";
import Share from "./Contents/Share";
import DeleteFolder from "./Contents/DeleteFolder";
import DeleteLink from "./Contents/DeleteLink";
import Add from "./Contents/Add";
import * as S from "./styled";
import { MODAL_TYPE } from "@/lib/constents";

interface ModalProps {
  onClose: () => void;
  currentType: keyof typeof MODAL_TYPE;
}

const ModalContents = {
  [MODAL_TYPE.edit]: Edit,
  [MODAL_TYPE.addtoFolder]: AddFolder,
  [MODAL_TYPE.share]: Share,
  [MODAL_TYPE.delete]: DeleteFolder,
  [MODAL_TYPE.deleteLink]: DeleteLink,
  [MODAL_TYPE.add]: Add,
};

const Modal = ({ currentType, onClose }: ModalProps) => {
  const ContentComponent = ModalContents[currentType] || (() => <div>이것은 모달이여</div>);

  const stopEventBubbling = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <S.BackGround onClick={onClose}>
      <S.ContentWrapper onClick={stopEventBubbling}>
        <S.ContentItem>
          <S.Close onClick={onClose} />
          <ContentComponent />
        </S.ContentItem>
      </S.ContentWrapper>
    </S.BackGround>
  );
};

export default Modal;
