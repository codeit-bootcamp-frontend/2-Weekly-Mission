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
  datas: NameTag[];
  selected?: string;
  onClick: (name: string, linksId?: number) => void;
}

function NameTag({ datas, selected, onClick }: NameTagProps) {
  return (
    <S.TageList>
      <S.TagItem $selected={selected === "전체"} onClick={() => onClick("전체")}>
        전체
      </S.TagItem>
      {datas?.map((data) => (
        <S.TagItem key={data.id} $selected={selected === data.name} onClick={() => onClick(data.name, data.id)}>
          {data.name}
        </S.TagItem>
      ))}
    </S.TageList>
  );
}

export default NameTag;
