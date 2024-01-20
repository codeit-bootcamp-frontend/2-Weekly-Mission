import React from "react";
import Content from "@/components/Contents";
import SharedHeader from "./Header";
import * as S from "./styled";
import { FolderData, FolderLinks } from "@/types/contents.type";
import { User } from "@/types/user.type";

interface SharedLayoutProps {
  isLoading: boolean;
  user?: User;
  name: string;
  links: FolderLinks[];
}

function SharedLayout({ isLoading, user, name, links }: SharedLayoutProps) {
  return (
    <>
      <SharedHeader user={user} folderName={name} />
      <S.Article>
        <Content isLoading={isLoading} links={links} />
      </S.Article>
    </>
  );
}

export default SharedLayout;
