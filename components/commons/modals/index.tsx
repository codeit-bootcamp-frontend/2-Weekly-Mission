import styled from "styled-components";
import CloseButton from "../modals/commons/CloseButton";
import SubmitButton from "./commons/SubmitButton";
import { modalContentsList } from "./modalContentsList";

export default function Modal({ title }) {
  const ModalComponent = modalContentsList.get(title);
  return (
    <ModalLayout>
      <ModalBox>
        <h3>{title}</h3>
        <CloseButton />
        <ModalComponent />
        {title !== "폴더 공유" ? (
          <SubmitButton title={title} type="button" />
        ) : null}
      </ModalBox>
    </ModalLayout>
  );
}

const ModalLayout = styled.form`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

const ModalBox = styled.div`
  width: 36rem;
  padding: 3.2rem 4rem;
  border: 1px solid black;
  background-color: #ffffff;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgba(204, 213, 227, 1);
  position: relative;

  & h3 {
    font-size: 2rem;
  }
`;
