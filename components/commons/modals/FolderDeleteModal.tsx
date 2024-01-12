import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout, RedButton } from "./Modal";

function FolderDeleteModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>폴더 삭제</h3>
        <p>폴더명</p>
        <RedButton onClick={onConfirm} type="button">
          삭제하기
        </RedButton>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}

export default FolderDeleteModal;
