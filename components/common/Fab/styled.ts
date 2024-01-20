import styled from "styled-components";
import AddIcon from "@/public/icons/add.svg";

interface AddIconProps {
  $mobile?: boolean;
}

const StyledAddIcon = styled(AddIcon)<AddIconProps>`
  display: ${(props) => props.$mobile && "none"};
  color: ${(props) => props.theme.primary};
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: ${(props) => props.$mobile && "block"};
    color: ${(props) => props.theme.gray100};
  }
`;

const FloatButton = styled.button`
  display: none;
  position: fixed;
  padding: 0.8rem 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  z-index: 1;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    bottom: 101px;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

export { StyledAddIcon, FloatButton };
