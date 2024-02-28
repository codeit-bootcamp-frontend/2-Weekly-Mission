import styled, { css } from "styled-components";

export default function SubmitButton({ children, onClick, title }) {
  const textList = {
    "폴더 이름 변경": "변경하기",
    "폴더 추가": "추가하기",
    "폴더에 추가": "추가하기",
    "폴더 삭제": "삭제하기",
    "링크 삭제": "삭제하기"
  };

  return <ButtonLayout title={title}>{textList[title]}</ButtonLayout>;
}

const ButtonLayout = styled.button`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.8rem;
  color: white;
  font-weight: 600;
  ${(props) =>
    props?.title === "폴더 삭제" || props.title === "링크 삭제"
      ? css`
          background-color: rgba(255, 91, 86, 1);
        `
      : css`
          background-image: linear-gradient(
            90deg,
            rgba(109, 106, 254, 1),
            rgba(106, 227, 254, 1)
          );
        `}
  border: none;
`;
