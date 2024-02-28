import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  :root {
    --primary-color: #6d6afe;
    --black-color: #111322;
    --white-color: #ffffff;
    --focus-alert: #ff5b56;
    /* gray-color */
    --gray-darkest: #3e3e43;
    --gray-darker: #9fa6b2;
    --gray-lighter: #ccd5e3;
    --gray-lightest: #e7effb;
    --gray-bg-color: #f0f6ff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard-Regular', sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li{
    list-style: none;
  }

input{
  border: 0.1rem solid black;
}
`;

export default GlobalStyle;
