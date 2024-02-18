import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFolder } from "@/lib/apis";
import * as S from "./styled";
import { QUERY_KEYS } from "@/lib/queryKeys";

interface CreateFolderProps {
  onClose: () => void;
}
function CreateFolder({ onClose }: CreateFolderProps) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: postFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.folder });
      onClose();
    },
  });

  const isLoading = status === "pending";

  const onSubmit = (data: FieldValues) => {
    mutate(data);
  };

  return (
    <>
      <S.Title>폴더 추가</S.Title>
      <S.Input placeholder="내용 입력" {...register("name", { required: true })} />
      <S.Button type="submit" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
        {isLoading ? "추가 중..." : "추가하기"}
      </S.Button>
    </>
  );
}

export default CreateFolder;
