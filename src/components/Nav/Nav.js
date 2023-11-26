import { useState } from "react";
import "./Nav.css";
import logo from "../../images/logo.svg";
import Account from "./Account";
import Signin from "./Signin";

function Nav() {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img className="logo" src={logo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {isSignin ? <Account /> : <Signin />}
      </div>
    </nav>
  );
}

export default Nav;
