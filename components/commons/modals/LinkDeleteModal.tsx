import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout, RedButton } from "./Modal";

function LinkDeleteModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>링크 삭제</h3>
        <p>링크url</p>
        <RedButton onClick={onConfirm} type="button">
          삭제하기
        </RedButton>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}
export default LinkDeleteModal;
