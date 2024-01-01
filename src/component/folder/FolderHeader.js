import React from "react";
import linkImg from "../../asset/link.svg";
import "../../css/headerfolder.css";

function FolderHeader({ handleModalOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지

    // 추가 로직 또는 값 설정
    const value = "AddFolderModal"; // 원하는 값으로 설정
    handleModalOpen(true, value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div className="linkInput">
          <div className="linkInputDiv">
            <img src={linkImg} className="folderHeaderImg" alt="linkImg" />
            <input className="folderInput" placeholder="링크를 추가해 보세요" />
          </div>
          <button type="submit" className="folderButton">
            추가하기
          </button>
        </div>
      </form>
    </header>
  );
}

export default FolderHeader;
