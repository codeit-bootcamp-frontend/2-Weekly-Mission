import React, { useEffect, useState } from "react";
import Head from "next/head";
import SharedLayout from "@/layouts/share";
import { FolderData, LinksResponse } from "@/types/contents.type";
import { useRouter } from "next/router";
import useTokenFetch from "@/hooks/useTokenFetch";
import { API_PATH } from "@/lib/constents";
import { UserResponse } from "@/types/user.type";

function SharedPage({ folders }: { folders: FolderData }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { id } = router.query;

  const { data: userData, loading: folderLoading } = useTokenFetch<UserResponse>(API_PATH.GET_USER);
  const { data: linksData, loading: linksLoading } = useTokenFetch<LinksResponse>(
    API_PATH.GET_SELECTED_FOLDER_LINKS(id as string)
  );

  const user = userData?.user;
  const links = linksData?.links ?? [];
  const name = folders.name;

  useEffect(() => {
    if (!folderLoading && !linksLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [folderLoading, linksLoading]);

  return (
    <>
      <Head>
        <title>Linkbrary | Shared</title>
      </Head>
      <SharedLayout isLoading={isLoading} name={name} user={user} links={links} />
    </>
  );
}

export default SharedPage;

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const { folders } = await fetch(`${process.env.NEXT_DEVELOP_ENDPOINT}/api/folder/${id}`).then((res) => res.json());
  return {
    props: {
      folders: folders[0],
    },
  };
}
