import { useState } from "react";
import "./FloatingAddBtn.css";
import Modal from "./Modal";
import floatingAddImage from "./images/floating-add.png";

function FloatingAddBtn() {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setOpenModal(true);
    setModalContent(content);
  };

  const handleaddClick = () => {
    const content = {
      title: "폴더 추가 ",
      hasInput: true,
      placeHolder: "내용 입력",
      hasSns: false,
      folderAddBtn: true,
      buttonName: "추가하기",
    };

    handleOpenModal(content);
  };

  return (
    <>
      <div className="floating-add-btn" onClick={handleaddClick}>
        <span>폴더 추가</span>
        <img src={floatingAddImage} alt="폴더 추가" />
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

export default FloatingAddBtn;
