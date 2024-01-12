import { InputModalBox, ModalLayout, GradientButton } from "./Modal";
import CloseButton from "./CloseButton";

function FolderAddInputModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>폴더 추가</h3>
        <input placeholder="내용 입력" />
        <GradientButton onClick={onConfirm} type="button">
          변경하기
        </GradientButton>
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderAddInputModal;
