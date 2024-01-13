import React, { useState } from "react";
import Head from "next/head";
import { useFetch } from "usehooks-ts";
import { Folder } from "@/types/folder.type";
import { FolderLayout } from "@/layouts/folder";

function FolderPage() {
  //임시 상수
  const linksUrl = "/api/links";
  const folderId = 1;

  const [selected, setSelected] = useState<string>("전체");
  const [url, setUrl] = useState(linksUrl);

  const { data: folderNameData } = useFetch(`/api/folder/${folderId}`);
  const { data: linksData } = useFetch<Folder>(url);

  const onClick = (name: string, linksId?: number) => {
    setSelected(name);
    setUrl(linksId ? `${linksUrl}/${linksId}` : linksUrl);
  };

  return (
    <>
      <Head>
        <title>Linkbrary | Folder</title>
      </Head>
      <FolderLayout links={linksData?.links || []} folderData={folderNameData} selected={selected} onClick={onClick} />
    </>
  );
}

export default FolderPage;
