import Link from "next/link";
import * as S from "./styled";

function LandingHeader() {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Slogan>
            <span>세상의 모든 정보</span>를<br />
            쉽게 저장하고 <br />
            관리해 보세요
          </S.Slogan>
          <S.Cta>
            <p>구경 해보기</p>
          </S.Cta>
          <S.StyledImage src="/images/main/hero.png" width={1200} height={100} alt="Linkbrary 서비스 소개" />
        </S.Header>
      </S.Container>
    </>
  );
}
export default LandingHeader;
