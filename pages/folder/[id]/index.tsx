import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "usehooks-ts";
import { FolderLayout } from "@/components/FolderLayout";

// To Do : 서버 사이드를 통한 동적 라우팅 작업 진행 중...
function FolderPage({ links }: any) {
  const [selected, setSelected] = useState<string>("전체");
  const router = useRouter();

  const { data: folderNameData } = useFetch(`/api/folder/${1}`);

  const onClick = (name: string, linksId?: number) => {
    setSelected(name);
    if (!linksId) router.push(`/folder/`);
    router.push(`/folder/${linksId}`);
  };

  return <FolderLayout links={links || []} folderData={folderNameData} selected={selected} onClick={onClick} />;
}

export default FolderPage;

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const baseUrl = "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/links/${id}`);
    const { links } = await res.json();
    return {
      props: {
        links,
      },
    };
  } catch (error) {
    console.error("Failed to fetch links:", error);
    return {
      props: {
        links: [],
      },
    };
  }
}
