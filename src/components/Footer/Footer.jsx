import styled from "styled-components";

import SNS from "./SNS";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import COLOR_TOKEN from "../../styles/colors";

function Footer() {
  const snsArray = [
    { imageSrc: facebook, alt: "facebook" },
    { imageSrc: twitter, alt: "twitter" },
    { imageSrc: youtube, alt: "youtube" },
    { imageSrc: instagram, alt: "instagram" },
  ];

  return (
    <FooterContainer>
      <FooterBox>
        <CopyRight>©codeit - 2023</CopyRight>
        <FooterLinkContainer>
          <FooterLink href="/">Privacy Policy</FooterLink>
          <FooterLink>FAQ</FooterLink>
        </FooterLinkContainer>
        <SNSContainer>
          {snsArray.map((sns) => (
            <SNS key={sns.alt} imageSrc={sns.imageSrc} alt={sns.alt} />
          ))}
        </SNSContainer>
      </FooterBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  background-color: ${COLOR_TOKEN.black};
  margin-top: 6rem;
`;

const FooterBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;

const CopyRight = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const FooterLinkContainer = styled.div`
  grid-area: footer-links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

const SNSContainer = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

export default Footer;
