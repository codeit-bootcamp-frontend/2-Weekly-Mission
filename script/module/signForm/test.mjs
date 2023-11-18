"use strict";

//로그인 기능구현

/* https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 
{ “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받으면 
“/folder”로 이동합니다. */

async function singInApi(email, password) {
  const userInfo = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.text();
    console.log(result);

    if (response.status === 200) {
      console.log("로그인 성공");
    } else {
      console.log("로그인 실패");
    }
  } catch (e) {
    console.log(e);
  }
}

// 회원가입 기능구현 (이메일중복검사)

/* 이메일 중복 확인은 “/api/check-email” POST 요청해서 확인합니다.
(중복된 이메일 확인은 “test@codeit.com”을 활용해 주세요.)
유효한 회원가입 형식의 경우 “/api/sign-up” POST 요청하고 
성공 응답을 받으면 “/folder”로 이동합니다.*/
async function checkEmailApi(email) {
  const emailInfo = {
    email: email,
  };

  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        body: JSON.stringify(emailInfo),
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.text();
    console.log(result);
    console.log("이메일중복");
  } catch (e) {
    console.log(e);
  }
}

// 회원가입 기능구현 (회원가입기능)

async function signUpApi(email, password) {
  const userInfo = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.text(); // 서버에서 받은 데이터 확인용
    console.log(result); // 출력
    console.log("회원가입완료");
  } catch (e) {
    console.log(e);
  }
}

//signUpApi(); // 테스트용 test@codeit.com 과 겹칠시 에러반환
