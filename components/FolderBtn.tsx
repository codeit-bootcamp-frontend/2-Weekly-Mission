import styled from "styled-components";
import { IPFolderData } from "../utils/type";
import Link from "next/link";

interface Props {
  data: IPFolderData;
  // handleData: (value: IPFolderData) => void;
  // handleSideBtn: (value: boolean) => void;
  p: number;
}

export default function FolderBtn({ data, p }: Props) {
  return (
    <Link href={`/folder/${data.id}`}>
      <StyledFolderFilterButton $isMatching={data.id === p} onClick={() => {}}>
        {data.name}
      </StyledFolderFilterButton>
    </Link>
  );
}

const StyledFolderFilterButton = styled.button<{ $isMatching: boolean }>`
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({ $isMatching }) => ($isMatching ? "#6d6afe" : "#fff")};
  color: ${({ $isMatching }) => ($isMatching ? "#fff" : "#000")};
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;
