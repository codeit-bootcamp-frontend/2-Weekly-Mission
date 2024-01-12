import CloseButton from "./CloseButton";
import { InputModalBox, ModalLayout, GradientButton } from "./Modal";

function FolderNameChangeModal({ onConfirm }: { onConfirm: () => void }) {
  return (
    <ModalLayout>
      <InputModalBox>
        <CloseButton onClick={onConfirm} />
        <h3>폴더 이름 변경</h3>
        <input placeholder="유용한 팁" />
        <GradientButton onClick={onConfirm} type="button">
          변경하기
        </GradientButton>
      </InputModalBox>
    </ModalLayout>
  );
}

export default FolderNameChangeModal;
