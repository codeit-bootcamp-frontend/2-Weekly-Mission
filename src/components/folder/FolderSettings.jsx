import React from "react";
import styled from "styled-components";

import COLOR_TOKEN from "../../styles/colors";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import trashCan from "../../images/trash-can.svg";

function FolderSettings() {
  return (
    <Container>
      <Box>
        <Img src={share} alt="공유하기" />
        <Text>공유</Text>
      </Box>
      <Box>
        <Img src={pen} alt="이름 변경하기" />
        <Text>이름 변경</Text>
      </Box>
      <Box>
        <Img src={trashCan} alt="삭제하기" />
        <Text>삭제</Text>
      </Box>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Img = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const Text = styled.span`
  color: ${COLOR_TOKEN.gray60};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default FolderSettings;
