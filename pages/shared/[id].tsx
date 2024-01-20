import React from "react";
import Head from "next/head";
import SharedLayout from "@/layouts/share";
import { FolderData } from "@/types/contents.type";

function SharedPage({ folders }: { folders: FolderData }) {
  return (
    <>
      <Head>
        <title>Linkbrary | Shared</title>
      </Head>
      <SharedLayout folders={folders} />
    </>
  );
}

export default SharedPage;

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const response = await fetch(`${process.env.NEXT_DEVELOP_ENDPOINT}/api/folder/${id}`).then((res) => res.json());
  return {
    props: {
      folders: response.folders[0],
    },
  };
}
