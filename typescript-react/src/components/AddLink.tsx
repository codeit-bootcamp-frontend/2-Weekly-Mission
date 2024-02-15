import React, { useState, useEffect } from "react";
import "../style/AddLink.css";
import AddLinkModal from "./Modal/AddLinkModal";
import Modal from "react-modal";

interface Folder {
  id: number;
  name: string;
}

interface FoldersData {
  data: Folder[];
}

interface AddLinkProps {
  folders: FoldersData | null;
}

const AddLink: React.FC<AddLinkProps> = ({ folders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddLinkVisible, setIsAddLinkVisible] = useState(true);

  const handleAddLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement("#root");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAddLinkVisible(scrollTop <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <form
        className={`addlink-section ${isAddLinkVisible ? "" : "invisible"}`}
      >
        <div className="addlink">
          <input
            className="addlink-input"
            type="search"
            placeholder="링크를 추가해 보세요."
          />
          <button className="addlink-button" onClick={handleAddLink}>
            추가하기
          </button>
        </div>
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <AddLinkModal onClose={handleCloseModal} folders={folders} />
        </Modal>
      )}
    </>
  );
};

export default AddLink;
