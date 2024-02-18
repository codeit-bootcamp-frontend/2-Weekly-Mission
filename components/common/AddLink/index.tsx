import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useModal } from "@/contexts/ModalContext";
import * as S from "./styled";
import LinkIcon from "@/public/icons/link.svg";

function AddLink() {
  const { register, handleSubmit } = useForm();
  const { openModal } = useModal();

  const onSubmit = (data: FieldValues) => {
    if (!data.url) return;
    openModal({ currentType: "addtoFolder", url: data.url });
  };
  return (
    <S.Wrapper>
      <S.SearchIcon as={LinkIcon} />
      <S.Input placeholder="링크를 추가해 보세요." {...register("url")} />
      <S.Button $type="short" onClick={handleSubmit(onSubmit)}>
        추가하기
      </S.Button>
    </S.Wrapper>
  );
}

export default AddLink;
