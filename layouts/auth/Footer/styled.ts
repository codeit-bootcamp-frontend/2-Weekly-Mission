import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.gray300};
  background-color: ${({ theme }) => theme.gray100};
`;

const SNSContainer = styled.div`
  display: flex;
  column-gap: 1.6rem;
`;

const SNSText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
`;

const SNSLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;

const GoogleLink = styled(SNSLink)`
  background-color: white;
  border: 0.1rem solid #d3d4dd;
`;

const KakaoLink = styled(SNSLink)`
  padding-top: 0.2rem;
  background-color: #f5e14b;
`;

export { Footer, SNSContainer, SNSText, GoogleLink, KakaoLink };
