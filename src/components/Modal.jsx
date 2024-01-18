import { useState } from "react";
import LayoutSns from "./LayoutSns";
import "./Modal.css";
import modalCloseImage from "./images/modal_close.png";

function Modal({ modalContent, closeModal }) {
  const [selectedTabs, setSelectedTabs] = useState([]);
  console.log(modalContent.linkUrl);
  const handleTabClick = (index) => {
    setSelectedTabs((prevSelectedTabs) => {
      if (prevSelectedTabs.includes(index)) {
        return prevSelectedTabs.filter((selectedTab) => selectedTab !== index);
      } else {
        return [...prevSelectedTabs, index];
      }
    });
  };

  const handleBgClick = (e) => {
    if (e.target.classList.contains("bg")) {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <p className="title">{modalContent.title}</p>
          {modalContent.folderName ? (
            <p className="folder-name">{modalContent.folderName}</p>
          ) : null}
          {modalContent.linkUrl ? (
            <p className="link-url">{modalContent.linkUrl}</p>
          ) : null}
        </div>

        <div className="modal-body">
          {modalContent.hasInput && (
            <input
              className="modal-input"
              placeholder={modalContent.placeHolder}
            />
          )}
          {modalContent.hasSns && <LayoutSns />}

          {modalContent.hasTabList &&
            modalContent.tabs.map((tab, i) => (
              <div
                key={i}
                className={`tabList ${selectedTabs.includes(i) ? "show" : ""}`}
                onClick={() => handleTabClick(i)}
              >
                <p className="tabName">{tab.name}</p>
                <p className="tabCount">{tab.link.count}</p>
              </div>
            ))}
        </div>

        <div className="modal-footer">
          <div className="action-btn">
            {modalContent.folderAddBtn && (
              <button className="add-btn">{modalContent.buttonName}</button>
            )}
            {modalContent.folderNameChageBtn && (
              <button className="add-btn">{modalContent.buttonName}</button>
            )}
            {modalContent.folderRemoveBtn && (
              <button className="remove-btn">{modalContent.buttonName}</button>
            )}
            {modalContent.linkRemoveBtn && (
              <button className="remove-btn">{modalContent.buttonName}</button>
            )}
            {modalContent.addToFolderBtn && (
              <button className="add-btn">{modalContent.buttonName}</button>
            )}
          </div>
        </div>

        <button className="close" onClick={closeModal}>
          <img src={modalCloseImage} alt="닫기" />
        </button>
      </div>
      <div className="bg" onClick={handleBgClick}></div>
    </>
  );
}
export default Modal;
