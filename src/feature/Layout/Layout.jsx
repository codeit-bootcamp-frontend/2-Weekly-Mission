import { useCallback, useEffect, useState } from "react";
import { useGetUser } from "../../data-access/useGetUser";
import { Footer } from "../Footer/Footer";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import "./Layout.css";

export const Layout = ({ children }) => {
  let { data } = useGetUser();
  const { email, image_source } = data || {};
  const profile = data ? { email, image_source } : null;

  const [scrollY, setScrollY] = useState(0);
  const [direction, setDiretion] = useState("up");

  /* 스크롤 방향 파악하는 함수 */
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setDiretion("down");
    } else if (currentScrollY < scrollY) {
      setDiretion("up");
    }
    setScrollY(currentScrollY);
  }, [scrollY]);

  useEffect(() => {
    const scrollEvent = () => handleScroll();

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [handleScroll]);

  return (
    <div>
      <NavigationBar
        profile={profile}
        className={`NavigationBar ${direction === "down" ? "up" : ""}`}
        /* 동작을 안합니다.. */
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
