import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <Copyright>&copy;codeit - 2023</Copyright>
        <FooterLinks>
          <FooterLink className="privacy" href="privacy.html">
            Privacy Policy
          </FooterLink>
          <FooterLink className="faq" href="faq.html">
            FAQ
          </FooterLink>
        </FooterLinks>
        <SNS>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgContainer>
              <Image
                fill
                src="/facebook.svg"
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </ImgContainer>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgContainer>
              <Image
                fill
                src="/twitter.svg"
                alt="twitter 홈페이지로 연결된 twitter 로고"
              />
            </ImgContainer>
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgContainer>
              <Image
                fill
                src="/youtube.svg"
                alt="youtube 홈페이지로 연결된 youtube 로고"
              />
            </ImgContainer>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgContainer>
              <Image
                fill
                src="/instagram.svg"
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </ImgContainer>
          </Link>
        </SNS>
      </FooterBox>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: #111322;
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;
`;

const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const FooterLinks = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
  justify-content: center;
`;

const SNS = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
  justify-content: center;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
`;
