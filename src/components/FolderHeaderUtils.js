import { useState } from "react";
import "./FolderHeaderUtils.css";
import Modal from "./Modal";
import shareImage from "./images/share.png";
import penImage from "./images/pen.png";
import removeImage from "./images/remove.png";

function FolderHeaderUtils({ folderName }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleShareClick = () => {
    const content = {
      title: "폴더 공유",
      hasInput: false,
      folderName,
      hasSns: true,
    };

    handleOpenModal(content);
  };

  const handleRenameClick = () => {
    const content = {
      title: "폴더 이름 변경",
      hasInput: true,
      placeHolder: "유용한 팁",
      hasSns: false,
      folderNameChageBtn: true,
      buttonName: "변경하기",
    };

    handleOpenModal(content);
  };

  const handleRemoveClick = () => {
    const content = {
      title: "폴더 삭제",
      hasInput: false,
      folderName,
      hasSns: false,
      hasBtn: true,
      folderRemoveBtn: true,
      buttonName: "삭제하기",
    };

    handleOpenModal(content);
  };

  return (
    <>
      <div className="utils">
        <div className="share">
          <button onClick={handleShareClick}>
            <img src={shareImage} alt="공유" />
            <span className="text">공유</span>
          </button>
        </div>
        <div className="rename">
          <button onClick={handleRenameClick}>
            <img src={penImage} alt="이름 변경" />
            <span className="text">이름 변경</span>
          </button>
        </div>
        <div className="remove">
          <button onClick={handleRemoveClick}>
            <img src={removeImage} alt="삭제" />
            <span className="text">삭제</span>
          </button>
        </div>
      </div>

      {openModal && (
        <Modal
          modalContent={modalContent}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default FolderHeaderUtils;
