export function getUserInfo(setUserInfo) {
  fetch("https://bootcamp-api.codeit.kr/api/sample/user")
    .then((response) => {
      if (!response.ok) throw new Error("유저 정보를 받는데 실패하였습니다.");
      return response.json();
    })
    .then((result) => {
      setUserInfo(result);
    });
}
