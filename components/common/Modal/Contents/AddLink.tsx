import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as S from "./styled";
import { useFolderData } from "@/hooks/useQueryData";
import { FolderData } from "@/types/contents.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLink } from "@/lib/apis";

interface AddLinkStyleProps {
  selected: boolean;
}

interface AddLinkProps {
  onClose: () => void;
  url?: string;
}

function AddLink({ onClose, url = "" }: AddLinkProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const { folderData } = useFolderData();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folder"] });
      onClose();
    },
  });

  const handleSelected = (id: string) => setSelected(id);

  const onSubmit = () => {
    mutate({ id: selected as string, url });
  };
  return (
    <>
      <S.TitleWrapper>
        <S.Title>폴더에 추가</S.Title>
        <S.SubTitle>{url}</S.SubTitle>
      </S.TitleWrapper>
      <div>
        {folderData.folder.map((folder: FolderData) => (
          <Link
            key={folder.id}
            selected={selected === String(folder.id)}
            onClick={() => handleSelected(String(folder.id))}
          >
            {folder.name} <LinkCount>{folder.link_count}개 링크</LinkCount>
          </Link>
        ))}
      </div>
      <S.Button onClick={onSubmit}>추가하기</S.Button>
    </>
  );
}

export default AddLink;

const Link = styled.div<AddLinkStyleProps>`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  border-radius: 8px;

  &:hover {
    background: var(--Linkbrary-bg, #f0f6ff);
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: var(--Linkbrary-bg, #f0f6ff);
      color: ${({ theme }) => theme.primary};
    `}
`;

const LinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
