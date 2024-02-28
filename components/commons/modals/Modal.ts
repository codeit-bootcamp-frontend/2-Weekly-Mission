import styled from "styled-components";

export const FolderSharedModalBox = styled(ModalBox)`
  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  & p {
    font-size: 1.4rem;
    color: rgba(159, 166, 178, 1);
    margin-bottom: 2.4rem;
  }
`;

export const DeleteModalModalBox = styled(ModalBox)`
  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  & p {
    font-size: 1.4rem;
    color: rgba(159, 166, 178, 1);
    margin-bottom: 2.4rem;
  }
`;

export const InputModalBox = styled(ModalBox)`
  & h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  & input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 0.1rem solid rgba(109, 106, 254, 1);
    margin-bottom: 1.5rem;
  }
`;

export const GradientButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  color: white;
  font-weight: 600;
  background-image: linear-gradient(
    90deg,
    rgba(109, 106, 254, 1),
    rgba(106, 227, 254, 1)
  );
  border: none;
`;

export const RedButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  color: white;
  font-weight: 600;
  background-color: rgba(255, 91, 86, 1);
  border: none;
`;
