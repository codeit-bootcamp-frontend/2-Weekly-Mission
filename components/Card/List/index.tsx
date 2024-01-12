import React from "react";
import Item from "../Item";
import * as S from "../styled";
import { ErrorMessage, NoLinks } from "./styled";
import { FolderLinks } from "@/types/folder.type";
import { Links } from "@/types/global.type";

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
        <NoLinks>
          <ErrorMessage>저장된 링크가 없습니다.</ErrorMessage>
        </NoLinks>
      )}
    </>
  );
}

export default List;
