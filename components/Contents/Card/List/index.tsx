import React from "react";
import Item from "../Item";
import { FolderLinks } from "@/types/folder.type";
import { Links } from "@/types/global.type";
import * as S from "./styled";

interface ListProps {
  folder: Links[] | FolderLinks[];
}

function List({ folder }: ListProps) {
  return (
    <>
      <S.Wrapper>
        {folder?.map((data) => {
          return <Item key={data.id} data={data} />;
        })}
      </S.Wrapper>
      {folder && !folder.length && (
        <S.NoLinks>
          <S.ErrorMessage>저장된 링크가 없습니다.</S.ErrorMessage>
        </S.NoLinks>
      )}
    </>
  );
}

export default List;
