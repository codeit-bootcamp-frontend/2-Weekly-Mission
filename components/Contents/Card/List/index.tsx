import React from "react";
import Item from "../Item";
import { Links } from "@/types/global.type";
import Spinner from "@/components/common/Spinner";
import * as S from "./styled";

interface ListProps {
  folder: Links[];
}

function List({ folder }: ListProps) {
  if (!folder) return <Spinner />;
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
