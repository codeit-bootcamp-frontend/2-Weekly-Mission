import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useFetch } from "usehooks-ts";
import Cta from "@/components/common/Cta";
import * as S from "./styled";
import account from "@/public/images/account.png";

interface Auth {
  ok: boolean;
  users: [
    {
      id: number;
      created_at: string;
      name: string;
      image_source: string;
      email: string;
      auth_id: string;
    }
  ];
}

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  //14주차 미션 진행 시 수정 예정
  const userId = 1;
  const { data } = useFetch<Auth>(`/api/users/${userId}`);
  const [users] = data?.users || [];

  const onLogin = () => {
    router.push("/auth/signin");
  };

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const getAccesstoken = localStorage.getItem("accessToken");
    if (getAccesstoken) setIsLogin(true);
  }, []);

  return (
    <S.Wrapper $location={router.pathname}>
      <S.Container>
        <Link href="/">
          <S.LogoContainer>
            <Image
              src="/logo.svg"
              fill
              style={{
                objectFit: "contain",
              }}
              priority
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </S.LogoContainer>
        </Link>

        <S.AccountContainer $isLoading={isLoading}>
          {isLogin ? (
            <S.Account>
              <Image src={users?.image_source || account} width={24} height={24} alt="account" unoptimized />
              <S.Email>{users?.email}</S.Email>
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
