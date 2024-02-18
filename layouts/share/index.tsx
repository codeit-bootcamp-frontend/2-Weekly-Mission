import React from "react";
import Content from "@/components/Contents";
import SharedHeader from "./Header";
import * as S from "./styled";
import { User } from "@/types/user.type";
import { Links } from "@/types/global.type";

interface SharedLayoutProps {
  isLoading: boolean;
  user?: User;
  name: string;
  links: Links[];
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
