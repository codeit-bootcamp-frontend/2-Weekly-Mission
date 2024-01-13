import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout, RedButton } from "./styledModal";

function FolderDeleteModal({ closeModal }: { closeModal: () => void }) {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton closeModal={closeModal} />
        <h3>폴더 삭제</h3>
        <p>폴더명</p>
        <RedButton onClick={closeModal} type="button">
          삭제하기
        </RedButton>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}

export default FolderDeleteModal;
