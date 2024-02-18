import React from "react";
import LinkIcon from "@/public/icons/link.svg";
import * as S from "./styled";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";
import { useModal } from "@/contexts/ModalContext";

function AddLink() {
  const { register, handleSubmit } = useForm();
  const { openModal } = useModal();

  const onSubmit = (data: FieldValues) => {
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
