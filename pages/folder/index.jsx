import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { fetchUserProfile } from "../api/auth/folder-api";

export default function Folder() {
  const [userProfile, setUserProfile] = useState(null); // userProfile 상태를 null로 초기화

  useEffect(() => {
    // 사용자 프로필을 가져오는 비동기 함수 호출
    async function getUserProfile() {
      try {
        const userProfile = await fetchUserProfile();

        console.log("사용자 프로필 데이터:", userProfile);
      } catch (error) {
        console.error(
          "사용자 프로필을 가져오는 동안 오류가 발생했습니다:",
          error
        );
      }
    }

    getUserProfile(); // 함수 호출
  }, []);

  return (
    <>
      {/* Nav 컴포넌트에 userProfile prop 전달 */}
      <Nav userProfile={userProfile} />
      <Header />
      <SearchBar />
      <input />
    </>
  );
}
