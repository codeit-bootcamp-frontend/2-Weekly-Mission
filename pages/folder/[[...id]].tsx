import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FolderLayout } from "@/layouts/folder";
import { useFolderData, useLinksData, useSelectedLinksData } from "@/hooks/useQueryData";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

function FolderPage() {
  const [selected, setSelected] = useState("전체");
  const router = useRouter();
  const { id } = router.query;

  const { folderData, folderLoading } = useFolderData();
  const { linksData, linksLoading } = useLinksData();
  const { selectedLinksData, selectedLoading } = useSelectedLinksData(id as string);

  const onClick = (name: string, linksId?: number) => {
    setSelected(name);
    router.push(linksId ? `/folder/${linksId}` : "/folder");
  };

  return (
    <>
      <Head>
        <title>Linkbrary | Folder</title>
      </Head>
      <FolderLayout
        isLoading={folderLoading || linksLoading || selectedLoading}
        links={selectedLinksData?.links || linksData?.links}
        folder={folderData?.folder}
        selected={selected}
        onClick={onClick}
      />
    </>
  );
}

export default FolderPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const accessToken = cookies.accessToken;

  if (!accessToken) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
