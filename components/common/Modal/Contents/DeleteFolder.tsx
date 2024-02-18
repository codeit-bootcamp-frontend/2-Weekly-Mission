import React from "react";
import * as S from "./styled";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFolder } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";

interface DeleteFolderProps {
  onClose: () => void;
  name?: string;
}

function DeleteFolder({ onClose, name = "" }: DeleteFolderProps) {
  const router = useRouter();
  const folderId = router.query.id as string;
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.folder });
      onClose();
    },
  });

  const onClick = () => {
    if (folderId) {
      mutate(folderId);
    }
  };

  return (
    <>
      <S.Title>폴더 삭제</S.Title>
      <S.SubTitle>{name}</S.SubTitle>
      <S.Button color="#ff5b56" onClick={onClick}>
        삭제하기
      </S.Button>
    </>
  );
}

export default DeleteFolder;
