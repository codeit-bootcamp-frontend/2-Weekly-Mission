import React from "react";
import * as S from "./styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLink } from "@/lib/apis";

interface DeleteLinkProps {
  onClose: () => void;
  linkId?: number;
  url?: string;
}

function DeleteLink({ onClose, linkId, url }: DeleteLinkProps) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      onClose();
    },
  });
  const onClick = async () => {
    if (linkId) {
      mutate(String(linkId));
    }
  };
  return (
    <>
      <S.Title>링크 삭제</S.Title>
      <S.SubTitle>{url}</S.SubTitle>
      <S.Button onClick={onClick} color="#ff5b56">
        삭제하기
      </S.Button>
    </>
  );
}

export default DeleteLink;
