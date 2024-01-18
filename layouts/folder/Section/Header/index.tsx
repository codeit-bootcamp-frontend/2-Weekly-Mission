import React from "react";
import NameTag from "@/components/common/NameTag";
import { FOLDER_OPTION_NAME } from "@/lib/constents";
import { useModal } from "@/contexts/ModalContext";
import Fab from "@/components/common/Fab";
import * as S from "./styled";
import { folderIcon } from "@/public/icons/folder";

interface FolderNameProps {
  data: any;
  selected: string;
  onClick: (name: string, linksId?: number) => void;
}

function FolderHeader({ data, selected, onClick }: FolderNameProps) {
  const { openModal } = useModal();

  return (
    <>
      <S.Sorts>
        <NameTag tags={data?.folder} selected={selected} onClick={onClick} />
        <Fab />
      </S.Sorts>
      <S.Header>
        <S.FolderName>{selected}</S.FolderName>
        {selected !== "전체" && selected && (
          <>
            <S.FolderOption>
              {Object.entries(folderIcon).map(([iconName, Icon]) => {
                return (
                  <S.Option
                    key={iconName}
                    onClick={() => {
                      openModal(iconName);
                    }}
                  >
                    <Icon />
                    <span>{FOLDER_OPTION_NAME[iconName]}</span>
                  </S.Option>
                );
              })}
            </S.FolderOption>
          </>
        )}
      </S.Header>
    </>
  );
}

export default FolderHeader;
