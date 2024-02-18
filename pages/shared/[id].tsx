import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SharedLayout from "@/layouts/share";
import { FolderData } from "@/types/contents.type";
import { useSelectedLinksData, useUserData } from "@/hooks/useQueryData";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

function SharedPage({ folders }: { folders: FolderData }) {
  const router = useRouter();
  const { id } = router.query;

  const { userData, userLoading } = useUserData();
  const { selectedLinksData, selectedLoading } = useSelectedLinksData(id as string);

  const links = selectedLinksData?.links ?? [];
  const name = folders.name;
  const isLoading = userLoading && selectedLoading;

  return (
    <>
      <Head>
        <title>Linkbrary | Shared</title>
      </Head>
      <SharedLayout isLoading={isLoading} name={name} user={userData} links={links} />
    </>
  );
}

export default SharedPage;

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

  // 사용자 폴더 정보 요청
  const { id } = context.params!;
  const {
    data: { folders },
  } = await axios.get(`${process.env.NEXT_DEVELOP_ENDPOINT}/api/folder/${id}`);
  return {
    props: {
      folders: folders[0],
    },
  };
}
