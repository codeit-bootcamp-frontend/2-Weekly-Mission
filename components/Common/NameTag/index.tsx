import React from "react";
import * as S from "./styled";

interface NameTag {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

interface NameTagProps {
  tags: NameTag[];
  selected?: string;
  onClick: (name: string, linksId?: number) => void;
}

function NameTag({ tags, selected, onClick }: NameTagProps) {
  return (
    <S.TageList>
      <S.TagItem $selected={selected === "전체"} onClick={() => onClick("전체")}>
        전체
      </S.TagItem>
      {tags?.map((tag) => (
        <S.TagItem key={tag.id} $selected={selected === tag.name} onClick={() => onClick(tag.name, tag.id)}>
          {tag.name}
        </S.TagItem>
      ))}
    </S.TageList>
  );
}

export default NameTag;
