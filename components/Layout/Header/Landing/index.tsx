import Link from "next/link";
import * as S from "./styled";
import { CtaLong } from "@/components/Common/Cta/styled";

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
          <Link href="/auth/signin">
            <CtaLong>
              <p>구경 해보기</p>
            </CtaLong>
          </Link>
          <S.StyledImage src="/images/main/hero.png" width={1200} height={590} alt="Linkbrary 서비스 소개" priority />
        </S.Header>
      </S.Container>
    </>
  );
}

export default LandingHeader;
