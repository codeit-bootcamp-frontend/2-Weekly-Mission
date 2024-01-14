import styled from "styled-components";
import React, { SetStateAction, useContext } from "react";
import { ModalContext } from "../../../contexts/LocaleContext";
import { ModalControl } from "../../../types/common";

function PopOver({
  setIsPopOver,
}: {
  setIsPopOver: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { openModal } = useContext<ModalControl>(ModalContext);
  return (
    <PopOverBox>
      <Button
        onClick={() => {
          openModal("링크삭제");
          setIsPopOver(false);
        }}
      >
        삭제하기
      </Button>
      <Button
        onClick={() => {
          openModal("폴더에 추가");
          setIsPopOver(false);
        }}
      >
        폴더에 추가
      </Button>
    </PopOverBox>
  );
}

const PopOverBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 10;
  right: 1.5rem;
  top: 3rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 3.1rem;
  font-size: 1.4rem;
  border: none;
  background-color: #ffffff;
  &:hover {
    background-color: rgba(231, 239, 251, 1);
    color: rgba(109, 106, 254, 1);
  }
`;

export default PopOver;
