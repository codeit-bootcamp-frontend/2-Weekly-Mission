import { InputModalBox, ModalLayout, GradientButton } from "./styledModal";
import CloseButton from "./CloseButton";

function FolderAddInputModal({ closeModal }: { closeModal: () => void }) {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton closeModal={closeModal} />
        <h3>폴더 추가</h3>
        <input placeholder="내용 입력" />
        <GradientButton onClick={closeModal} type="button">
          변경하기
        </GradientButton>
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderAddInputModal;
