import { Outlet } from "react-router-dom";
import GlobalStyles from "../styles/global";

function Layout() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
