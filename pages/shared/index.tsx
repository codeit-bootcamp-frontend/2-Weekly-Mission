import React from "react";
import Profile from "../../components/domains/shared/Profile";
// import SearchBar from "../../components/commons/SearchBar";
import SharedCardList from "../../components/domains/shared/SharedCardList";
import styles from "@/styles/Shared.module.css";

function SharedPage() {
  return (
    <>
      <main>
        <Profile />
        <div className={styles.folder}>
          {/* <SearchBar /> */}
          <SharedCardList />
        </div>
      </main>
    </>
  );
}

export default SharedPage;
