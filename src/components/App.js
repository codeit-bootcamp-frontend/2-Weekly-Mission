import { useEffect, useState } from 'react';
import "../styles/variables.css";
import Cta from './atoms/Cta';
import Logo from './atoms/Logo';
import Gnb from './molecules/Gnb'
import GlobalStyle from '../styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Cta>로그인</Cta>
        <Logo></Logo>
        <Gnb></Gnb>
      </div>
    </div>
  );
}

export default App;