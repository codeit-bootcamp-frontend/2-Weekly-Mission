import { useMediaQuery } from "usehooks-ts";
import { useModal } from "@/contexts/ModalContext";
import * as S from "./styled";

const Fab = () => {
  const isMobile = useMediaQuery("(max-width: 762px)");
  const { openModal } = useModal();

  return isMobile ? (
    <S.FloatButton onClick={() => openModal({ currentType: "add" })}>
      <span>폴더 추가</span>
      <S.StyledAddIcon $mobile />
    </S.FloatButton>
  ) : (
    <S.StyledAddIcon onClick={() => openModal({ currentType: "add" })} />
  );
};

export default Fab;
