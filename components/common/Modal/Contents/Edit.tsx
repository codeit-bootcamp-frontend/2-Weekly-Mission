import React from "react";
import * as S from "./styled";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putFolder } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";

function Edit({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const router = useRouter();
  const folderId = router.query.id as string;

  const { mutate } = useMutation({
    mutationFn: putFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.folder });
      onClose();
    },
  });

  const onSubmit = (data: FieldValues) => {
    mutate({ id: folderId, name: data.name });
  };

  return (
    <>
      <S.Title>폴더 이름 변경</S.Title>
      <S.Input placeholder="내용 입력" {...register("name")} />
      <S.Button onClick={handleSubmit(onSubmit)}>변경하기</S.Button>
    </>
  );
}

export default Edit;
