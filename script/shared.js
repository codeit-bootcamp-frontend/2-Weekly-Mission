import ENDPOINTS from "../src/config/api";

//TODO header을 react 컴포넌트로 재구성해야함
fetch(ENDPOINTS.SAMPLE.USER)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    if (result) {
      const headerButton = document.querySelector(".header .action-button");
      headerButton.outerHTML = `
    <div class= header__user-info>
      <img class = header__user-profile src=${result.profileImageSource} alt="프로필 이미지" />
      <span class = header__user-email >${result.email}</span>
    </div>
    `;

      const headerUserInfo = document.querySelector(".header__user-info");
      headerUserInfo.style.cssText = `
      display: flex;
      align-items: center;
      gap: 6px;
    `;

      const headerUserProfile = document.querySelector(".header__user-profile");
      headerUserProfile.style.cssText = `
      width: 28px;
      height: 28px;
      border-radius: 100%;
    `;

      const headerUserEmail = document.querySelector(".header__user-email");
      headerUserEmail.style.cssText = `
      color: #373740;
      font-size: 14px;
      font-weight: 400;
    `;
    }
  })
  .catch((error) => {
    console.error(`데이터 가져오는 중 오류 발생\n${error}`);
  });
