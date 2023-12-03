import { useCallback, useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import "./Layout.css";
import { useGetUser } from "data-access/useGetUser";

export const Layout = ({ children }) => {
  const { data } = useGetUser();
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

// 방법1
// 에러메시지 : ERROR: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.

// import { useCallback, useEffect, useState } from "react";
// import { Footer } from "../Footer/Footer";
// import { NavigationBar } from "../NavigationBar/NavigationBar";
// import "./Layout.css";
// import { getUserData } from "../../data-access/Api";
// import { useGetUser } from "data-access/useGetUser";

// export const Layout = async ({ children }) => {
//   const userData = await getUserData();
//   const { email, image_source } = userData;
//   const profile = userData ? { email, image_source } : null;
//   console.log({ profile });
//   const [scrollY, setScrollY] = useState(0);
//   const [direction, setDiretion] = useState("up");

//   /* 스크롤 방향 파악하는 함수 */
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > scrollY) {
//       setDiretion("down");
//     } else if (currentScrollY < scrollY) {
//       setDiretion("up");
//     }
//     setScrollY(currentScrollY);
//   }, [scrollY]);

//   useEffect(() => {
//     const scrollEvent = () => handleScroll();

//     window.addEventListener("scroll", scrollEvent);

//     return () => {
//       window.removeEventListener("scroll", scrollEvent);
//     };
//   }, [handleScroll]);

//   return (
//     <div>
//       <NavigationBar
//         profile={profile}
//         className={`NavigationBar ${direction === "down" ? "up" : ""}`}
//         /* 동작을 안합니다.. */
//       />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };

// 방법2
// 에러는 없는데 결과가 달라짐. 원하는 profile 구할 수 없음

// import { useCallback, useEffect, useState } from "react";
// import { Footer } from "../Footer/Footer";
// import { NavigationBar } from "../NavigationBar/NavigationBar";
// import "./Layout.css";
// import { getUserData } from "../../data-access/Api";

// export const Layout = ({ children }) => {
//   const profile = useCallback(async () => {
//     const userData = await getUserData();
//     const { email, image_source } = userData;
//     const profile = userData ? { email, image_source } : null;
//     return profile;
//   }, []);

//   console.log({ profile });
//   const [scrollY, setScrollY] = useState(0);
//   const [direction, setDiretion] = useState("up");

//   /* 스크롤 방향 파악하는 함수 */
//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > scrollY) {
//       setDiretion("down");
//     } else if (currentScrollY < scrollY) {
//       setDiretion("up");
//     }
//     setScrollY(currentScrollY);
//   }, [scrollY]);

//   useEffect(() => {
//     const scrollEvent = () => handleScroll();

//     window.addEventListener("scroll", scrollEvent);

//     return () => {
//       window.removeEventListener("scroll", scrollEvent);
//     };
//   }, [handleScroll]);

//   return (
//     <div>
//       <NavigationBar
//         profile={profile}
//         className={`NavigationBar ${direction === "down" ? "up" : ""}`}
//         /* 동작을 안합니다.. */
//       />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// };
