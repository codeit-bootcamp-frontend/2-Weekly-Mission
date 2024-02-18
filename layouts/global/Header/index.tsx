import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";
import Cta from "@/components/common/Cta";
import * as S from "./styled";
import account from "@/public/images/account.png";

function Header() {
  const router = useRouter();
  const { data: user, isLoading } = useQuery({
    queryKey: QUERY_KEYS.user,
    queryFn: fetchUser,
    enabled: router.pathname !== "/",
  });
  const onLogin = () => {
    router.push("/auth/signin");
  };

  return (
    <S.Wrapper $location={router.pathname}>
      <S.Container>
        <Link href="/">
          <S.LogoContainer>
            <Image src="/logo.svg" fill style={{ objectFit: "contain" }} priority alt="홈으로 연결된 Linkbrary 로고" />
          </S.LogoContainer>
        </Link>
        <S.AccountContainer $isLoading={isLoading}>
          {router.pathname === "/" ? (
            <Cta $type="short" onClick={onLogin}>
              로그인
            </Cta>
          ) : (
            <S.Account>
              <Image src={user?.image_source || account} width={24} height={24} alt="account" unoptimized />
              <S.Email>{user?.email}</S.Email>
            </S.Account>
          )}
        </S.AccountContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
