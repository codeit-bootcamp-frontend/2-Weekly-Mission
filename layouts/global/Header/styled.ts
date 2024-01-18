import styled from "styled-components";

const Wrapper = styled.nav<{ $location: string }>`
  display: flex;
  justify-content: center;
  position: ${(props) => (props.$location === "/folder" ? "static" : "sticky")};
  top: 0;
  width: 100%;
  background-color: #edf7ff;

  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: ${(props) => props.theme.deviceSizes.desktop}) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 13rem;
  height: 1.6rem;

  @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 2.4rem;
  }
`;

const AccountContainer = styled.div<{ $isLoading: boolean }>`
  display: ${({ $isLoading }) => ($isLoading ? "none" : "block")};
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AccountIcon = styled.img`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;

const Email = styled.span`
  color: var(--gray-1, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export { Wrapper, Container, LogoContainer, AccountContainer, Account, AccountIcon, Email };
