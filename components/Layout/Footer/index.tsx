import Link from "next/link";
import * as S from "./styled";
import { footerIcon } from "@/public/icons/footer";

const Footer = () => {
  return (
    <S.Container>
      <S.Box>
        <S.CopyRight>©codeit - 2023</S.CopyRight>
        <S.Links>
          <S.SLink href="/">Privacy Policy</S.SLink>
          <S.SLink href="/">FAQ</S.SLink>
        </S.Links>
        <S.SNS>
          {Object.entries(footerIcon).map(([urlName, Icon]) => {
            return (
              <Link href={`https://www.${urlName}.com`} target="_blank" rel="noopener noreferrer" key={urlName}>
                <Icon />
              </Link>
            );
          })}
        </S.SNS>
      </S.Box>
    </S.Container>
  );
};

export default Footer;
