import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout } from "./styledModal";

function LinkDeleteModal() {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton />
        <h3>링크 삭제</h3>
        <p>링크url</p>
        <button type="button">삭제하기</button>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}
export default LinkDeleteModal;
