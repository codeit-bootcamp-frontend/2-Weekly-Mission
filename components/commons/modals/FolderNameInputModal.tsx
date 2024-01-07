import CloseButton from "./CloseButton";
import { InputModalBox, ModalLayout, GradientButton } from "./styledModal";

function FolderNameChangeModal({ closeModal }: { closeModal: () => void }) {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton closeModal={closeModal} />
        <h3>폴더 이름 변경</h3>
        <input placeholder="유용한 팁" />
        <GradientButton onClick={closeModal} type="button">
          변경하기
        </GradientButton>
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderNameChangeModal;
