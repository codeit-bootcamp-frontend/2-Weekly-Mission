"use strict";

//로그인 기능구현

/* https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 
{ “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받으면 
“/folder”로 이동합니다. */

async function singInApi() {
  const userInfo = {
    email: "test@codeit.com",
    password: "sprint101",
  };

  try {
    const respones = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    if (respones.ok) {
      console.log("로그인성공");
      window.location.href = "/folder";
      //const responseData = await respones.json(); / 서버에서 받은 데이터 확인용
      //console.log("서버에서 받은 데이터:", responseData); // 출력
    } else {
      console.log("로그인실패");
    }
  } catch (e) {
    console.log(e);
  }
}

// 회원가입 기능구현

/* 이메일 중복 확인은 “/api/check-email” POST 요청해서 확인합니다.
(중복된 이메일 확인은 “test@codeit.com”을 활용해 주세요.)
유효한 회원가입 형식의 경우 “/api/sign-up” POST 요청하고 성공 응답을 받으면 “/folder”로 이동합니다.*/

export { singInApi };
