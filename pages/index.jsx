import Link from "next/link";

export default function Home() {
  return (
    <>
     <div>안녕</div><br/>
     <Link href="/signin">로그인 하기</Link><br/><br/>
     <Link href="/signup">회원 가입하기</Link><br/><br/>
     <Link href="/shared">shared 페이지</Link><br/><br/>
     <Link href="/folder">folder 페이지</Link><br/><br/>
    </>
  )
}
