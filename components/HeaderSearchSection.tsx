import styled from "styled-components";

interface Props {
  setRef: React.RefObject<HTMLDivElement>;
  linkSearchInputOb: boolean;
  footerOb: boolean;
}

function HeaderSearchSection({ setRef, linkSearchInputOb, footerOb }: Props) {
  return (
    <Container>
      <StyledHeaderSectionContainer ref={setRef} $linkSearchOb={linkSearchInputOb} $footerOb={footerOb}>
        <StyledHeaderSectionForm>
          <StyledHeaderSectionInput type="text" placeholder="링크를 추가해 보세요" />
          <StyledHeaderSectionButton type="submit">추가하기</StyledHeaderSectionButton>
        </StyledHeaderSectionForm>
      </StyledHeaderSectionContainer>
    </Container>
  );
}

/* 섹션의 포지션 이동시 뚝 뚝 끊기는 현상 방지용 컨테이너
height는 padding과 각 높이의 합으로 계산함 */
const Container = styled.div`
  width: 100%;
  height: 21rem;
`;

const StyledHeaderSectionContainer = styled.section<{ $linkSearchOb: boolean; $footerOb: boolean }>`
  width: 100%;
  background-color: #f0f6ff;
  text-align: center;
  display: ${({ $footerOb, $linkSearchOb }) => ($footerOb && !$linkSearchOb ? "none" : "flex")};
  justify-content: center;

  position: ${({ $linkSearchOb: $ob }) => ($ob ? "static" : "fixed")};
  bottom: 0;
  z-index: ${({ $linkSearchOb: $ob }) => ($ob ? 1 : 99)};
  padding: ${({ $linkSearchOb: $ob }) => ($ob ? "6rem 32rem 9rem" : "2.4rem 0 2.4rem 0")};

  @media all and (max-width: 1124px) {
    padding: 6rem 3.2rem 9rem;
  }
`;

const StyledHeaderSectionForm = styled.form`
  position: relative;

  @media all and (max-width: 1124px) {
    width: 100%;
  }
`;

const StyledHeaderSectionInput = styled.input`
  width: 100%;
  padding: 2.2rem 2rem;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  min-width: 80rem;

  &::placeholder {
    background-image: url(/svg/link.svg);
    background-size: contain;
    background-position: 0.1rem center;
    background-repeat: no-repeat;
    text-align: left;
    padding-left: 3rem;
  }

  &::focus {
    outline: none;
    border: 3px solid #6d6afe;
  }

  @media all and (max-width: 1124px) {
    min-width: 0;
  }
`;

const StyledHeaderSectionButton = styled.button`
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  position: absolute;
  right: 2.2rem;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export default HeaderSearchSection;
