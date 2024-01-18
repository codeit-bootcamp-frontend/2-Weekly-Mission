import { css } from "styled-components";

const resetStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
    height: 100vh;
  }

  main {
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;

export default resetStyle;
