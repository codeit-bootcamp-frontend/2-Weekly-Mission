import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Message = styled.p`
  display: flex;
  column-gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
`;

const SLink = styled(Link)`
  height: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.primary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary};
`;

export { Header, LogoLink, Message, SLink };
