import styled from "styled-components";
import React from "react";

import { FolderInfo } from "../../../types/common";
import { useRouter } from "next/router";

function FolderBadge({ folder }: { folder: FolderInfo }) {
  const router = useRouter();

  return (
    <FolderSelectBadge
      onClick={() => {
        router.push(`/folder/${folder.id}`);
      }}
    >
      {folder && folder.name}
    </FolderSelectBadge>
  );
}
const FolderSelectBadge = styled.button`
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
  }

  /* Mobile*/
  @media (max-width: 390px) {
    padding: 0.6rem 1.2rem;
  }
`;

export default FolderBadge;
