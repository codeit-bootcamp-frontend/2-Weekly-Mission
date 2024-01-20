import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/common/Cta";
import useTokenFetch from "@/hooks/useTokenFetch";
import account from "@/public/images/account.png";
import * as S from "./styled";
import { UserResponse } from "@/types/user.type";
import { API_PATH } from "@/lib/constents";

function Header() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: userData } = useTokenFetch<UserResponse>(API_PATH.GET_USER);

  const router = useRouter();

  const onLogin = () => {
    router.push("/auth/signin");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setIsLoading(false);
    }
  }, [userData]);

  const user = userData?.user;

  return (
    <S.Wrapper $location={router.pathname}>
      <S.Container>
        <Link href="/">
          <S.LogoContainer>
            <Image src="/logo.svg" fill style={{ objectFit: "contain" }} priority alt="홈으로 연결된 Linkbrary 로고" />
          </S.LogoContainer>
        </Link>

        <S.AccountContainer $isLoading={isLoading}>
          {isLogin ? (
            <S.Account>
              <Image src={user?.image_source || account} width={24} height={24} alt="account" unoptimized />
              <S.Email>{user?.email}</S.Email>
            </S.Account>
          ) : (
            <Cta $type="short" onClick={onLogin}>
              로그인
            </Cta>
          )}
        </S.AccountContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
