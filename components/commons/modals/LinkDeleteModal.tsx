import CloseButton from "./CloseButton";
import { DeleteModalModalBox, ModalLayout, RedButton } from "./styledModal";

function LinkDeleteModal({ closeModal }: { closeModal: () => void }) {
  return (
    <ModalLayout>
      <DeleteModalModalBox>
        <CloseButton closeModal={closeModal} />
        <h3>링크 삭제</h3>
        <p>링크url</p>
        <RedButton onClick={closeModal} type="button">
          삭제하기
        </RedButton>
      </DeleteModalModalBox>
    </ModalLayout>
  );
}
export default LinkDeleteModal;
