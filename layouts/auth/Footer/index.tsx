import React from "react";
import Image from "next/image";

import * as S from "./styled";

function AuthFooter() {
  return (
    <S.Footer>
      <S.SNSText>소셜 로그인</S.SNSText>
      <S.SNSContainer>
        <S.GoogleLink href="https://www.google.com/">
          <Image src="/icons/google.png" alt="google" width={24} height={24} />
        </S.GoogleLink>
        <S.KakaoLink href="https://www.kakaocorp.com/page/">
          <Image src="/icons/kakao.svg" alt="kakao" width={24} height={24} />
        </S.KakaoLink>
      </S.SNSContainer>
    </S.Footer>
  );
}

export default AuthFooter;
