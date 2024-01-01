
import FolderHeader from "../component/folder/FolderHeader";

import FolderMain from "../component/folder/FolderMain";
import { useState } from "react";
import ContainerModal from "../component/utilModal/ContainerModal";
function FolderPage({ folderInfo, userFolderList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModalOption, setSelectedModalOption] = useState("");
  const [folderId, setFolderId] = useState();
  const handleModalOpen = (boolean, modalOption, folderId) => {
    setModalOpen(boolean);
    setSelectedModalOption(modalOption);
  };
  const handleFolderId = (value) => {
    setFolderId(value);
  };
  return (
    <>
      <FolderHeader handleModalOpen={handleModalOpen} />
      <FolderMain
        folderInfo={folderInfo}
        userFolderList={userFolderList}
        handleModalOpen={handleModalOpen}
        handleFolderId={handleFolderId}
      />
      {modalOpen && (
        <div>
          <ContainerModal
            handleModalOpen={handleModalOpen}
            selectedModalOption={selectedModalOption}
            folderId={folderId}
          />
        </div>
      )}
    </>
  );
}
export default FolderPage;
