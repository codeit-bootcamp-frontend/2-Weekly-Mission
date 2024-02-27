import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ROUTE } from "@/src/sharing/util";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <main>
        <Link href={ROUTE.로그인}>로그인</Link>
        <Link href={ROUTE.회원가입}>회원가입</Link>
        <Link href={ROUTE.폴더}>폴더</Link>
        <Link href={ROUTE.개인정보처리방침}>개인정보처리방침</Link>
        <Link href={ROUTE.로그인}>로그인</Link>
      </main>
    </>
  );
}
