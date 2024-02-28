import styled from "styled-components";
import Image from "next/image";

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <Button
      width={24}
      height={24}
      src="/images/modal-close.png"
      alt="닫기 아이콘"
      onClick={onClose}
    />
  );
}

const Button = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1.6rem;
`;

export default CloseButton;
