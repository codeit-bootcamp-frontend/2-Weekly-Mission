import React from "react";
import { useRouter } from "next/router";
import Content from "@/components/Contents";
import SharedHeader from "./Header";
import useTokenFetch from "@/hooks/useTokenFetch";
import { API_PATH } from "@/lib/constents";
import Spinner from "@/components/common/Spinner";
import { UserResponse } from "@/types/user.type";
import { FolderData, LinksResponse } from "@/types/contents.type";

function SharedLayout({ folders }: { folders: FolderData }) {
  const router = useRouter();
  const { id } = router.query;

  const userData = useTokenFetch<UserResponse>(API_PATH.GET_USER);
  const linksData = useTokenFetch<LinksResponse>(API_PATH.GET_SELECTED_FOLDER_LINKS(id as string));

  const user = userData?.user;
  const links = linksData?.links ?? [];

  if (!userData || !linksData) return <Spinner />;

  return (
    <>
      <SharedHeader user={user} folderName={folders.name} />
      <Content links={links} />
    </>
  );
}

export default SharedLayout;
