import styled from "styled-components";
import { IModalData } from "../utils/type";

interface Props {
  $setIsModalOn: (value: boolean) => void;
  $isModalOn: boolean;
  modalData: IModalData;
}

export default function Modal({ $setIsModalOn, $isModalOn, modalData }: Props) {
  return (
    <>
      <StyledModalBackground
        onClick={() => {
          $setIsModalOn(false);
        }}
        $isModalOn={$isModalOn}
      />
      <StyledModalItem $isModalOn={$isModalOn}>
        {modalData.title}
        {modalData.sideTitle}
        {modalData.input}
        {modalData.addLinkList}
        {modalData.button}
        {modalData.img}
      </StyledModalItem>
    </>
  );
}

const StyledModalBackground = styled.div<{ $isModalOn: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.4;
  z-index: 98;
  display: ${({ $isModalOn }) => ($isModalOn ? `block` : `none`)};
`;

const StyledModalItem = styled.form<{ $isModalOn: boolean }>`
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;

  display: ${({ $isModalOn }) => ($isModalOn ? `flex` : `none`)};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
