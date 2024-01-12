import React from "react";
import Head from "next/head";
import { useFetch } from "usehooks-ts";
import SharedInfo from "@/components/SharedInfo";
import Main from "@/components/Main";
import SpinnerIcon from "@/components/Spinner";
import { Shared } from "@/types/shared.type";
import { Links } from "@/types/global.type";

function SharedPage() {
  const { data } = useFetch<Shared>("/api/shared");

  if (!data) {
    return <SpinnerIcon />;
  }

  const { folder } = data;
  const links = folder.links as Links[];

  return (
    <>
      <Head>
        <title>Linkbrary | Shared</title>
      </Head>
      <SharedInfo folder={folder} />
      <Main links={links} />
    </>
  );
}

export default SharedPage;
