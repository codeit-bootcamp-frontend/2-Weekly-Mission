import React from "react";
import { useFetch } from "usehooks-ts";
import Content from "@/components/Contents";
import Spinner from "@/components/common/Spinner";
import { Shared } from "@/types/shared.type";
import { Links } from "@/types/global.type";
import SharedHeader from "./Header";

function SharedLayout() {
  const { data } = useFetch<Shared>("/api/shared");

  if (!data) {
    return <Spinner />;
  }

  const { folder } = data;
  const links = folder.links as Links[];

  return (
    <>
      <SharedHeader folder={folder} />
      <Content links={links} />
    </>
  );
}

export default SharedLayout;
