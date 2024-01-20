import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useTokenFetch from "@/hooks/useTokenFetch";
import { FolderLayout } from "@/layouts/folder";
import { API_PATH } from "@/lib/constents";
import { FolderResponse, LinksResponse } from "@/types/contents.type";

function FolderPage() {
  const [selected, setSelected] = useState<string>("전체");
  const router = useRouter();
  const { id } = router.query;

  const folderData = useTokenFetch<FolderResponse>(API_PATH.GET_FOLDER);

  const linksUrl = id ? API_PATH.GET_SELECTED_FOLDER_LINKS(id as string) : API_PATH.GET_LINKS;
  const linksData = useTokenFetch<LinksResponse>(linksUrl);

  const onClick = (name: string, linksId?: number) => {
    setSelected(name);
    if (linksId) {
      router.push(`/folder/${linksId}`);
    } else {
      router.push("/folder");
    }
  };

  const links = linksData?.links ?? [];
  const folder = folderData?.folder ?? [];

  return (
    <>
      <Head>
        <title>Linkbrary | Folder</title>
      </Head>
      <FolderLayout links={links} folder={folder} selected={selected} onClick={onClick} />
    </>
  );
}

export default FolderPage;
