import React from "react";
import * as S from "./styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLink } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";
import { useRouter } from "next/router";

interface DeleteLinkProps {
  onClose: () => void;
  linkId?: number;
  url?: string;
}

function DeleteLink({ onClose, linkId, url }: DeleteLinkProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const folderId = router.query.id as string;
  const { mutate } = useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.selectedFolderLinks(folderId) });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.folder });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.links });
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
