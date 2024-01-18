import styled from "styled-components";

import COLOR_TOKEN from "../../styles/colors";

function AddLinkBtn() {
  return <AddLinkCTA type="button">추가하기</AddLinkCTA>;
}

const AddLinkCTA = styled.button`
  display: flex;
  width: 8rem;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 3.7rem;
  background: ${COLOR_TOKEN.graPurpleBlueToSkyBlue};
  border-radius: 0.8rem;
  color: ${COLOR_TOKEN.grayLight};
  font-size: 1.4rem;
  font-weight: 600;
`;

export default AddLinkBtn;
