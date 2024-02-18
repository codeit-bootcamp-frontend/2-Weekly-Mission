import React from "react";
import * as S from "./styled";
import { FolderData } from "@/types/contents.type";

interface NameTagProps {
  tags: FolderData[];
  selected?: string;
  onClick: (name: string, linksId?: number) => void;
}

function NameTag({ tags, selected, onClick }: NameTagProps) {
  return (
    <S.TageList>
      <S.TagItem $selected={selected === "전체"} onClick={() => onClick("전체")}>
        전체
      </S.TagItem>
      {tags ? (
        tags?.map((tag) => (
          <S.TagItem key={tag.id} $selected={selected === tag.name} onClick={() => onClick(tag.name, tag.id)}>
            {tag.name}({tag.link_count})
          </S.TagItem>
        ))
      ) : (
        <></>
      )}
    </S.TageList>
  );
}

export default NameTag;
