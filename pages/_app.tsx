import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ModalContext } from "../contexts/LocaleContext";
import GlobalStyle from "../styles/GlobalStyles";
import useModal from "../hook/useModal";
import { NextRouter, useRouter } from "next/router";
import { UserInfo, FolderInfo, Link } from "../types/common";
import { ParsedUrlQuery } from "querystring";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [sharedLinkInfo, setSharedLinkInfo] = useState<Link[]>([]);
  const [folderAllLinkInfo, setFolderAllLinkInfo] = useState<Link[]>([]);
  const [folderListInfo, setFolderListInfo] = useState<Link[]>([]);

  const router: NextRouter = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;

  // const handleFolderListLoad = async () => {
  //   const allLinksFolder = {
  //     id: 0,
  //     name: "전체",
  //     user_id: 1
  //   };
  //   const { data: folder } = await getAllFolderData();
  //   setFolderListInfo([allLinksFolder, ...folder.folder]);
  // };

  // const handleAllLinkLoad = async () => {
  //   const { data: folder } = await getAllLinkData();
  //   setFolderAllLinkInfo(folder.folder);
  // };

  useEffect(() => {
    // handleFolderListLoad();
    // handleAllLinkLoad();
    // if (folderId) {
    //   handleFolderInfoLoad();
    // }
  }, [folderId]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
