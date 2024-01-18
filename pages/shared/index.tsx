import React from "react";
import Head from "next/head";
import SharedLayout from "@/layouts/share";

function SharedPage() {
  return (
    <>
      <Head>
        <title>Linkbrary | Shared</title>
      </Head>
      <SharedLayout />
    </>
  );
}

export default SharedPage;
