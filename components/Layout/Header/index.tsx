import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useFetch } from "usehooks-ts";
import * as S from "./styled";
import account from "@/public/images/account.png";
import { CtaShort } from "@/components/Common/Cta/styled";

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
  const router = useRouter();
  const userId = 1;
  const { data } = useFetch<Auth>(`/api/users/${userId}`);
  const [users] = data?.users || [];

  //현재 로그인 기능이 존재하지 않기 때문에 toggle로써의 기능만 가짐.
  const onLogin = () => {
    // setIsLogin((prev) => !prev);
    router.push("/auth/signin");
  };

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

        {isLogin ? (
          <S.Account>
            <Image src={users?.image_source || account} width={24} height={24} alt="account" unoptimized />
            <S.Email>{users?.email}</S.Email>
          </S.Account>
        ) : (
          <CtaShort onClick={onLogin}>로그인</CtaShort>
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
