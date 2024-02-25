import Footer from "./commons/Footer";
import Header from "./commons/Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOwnerData, getFolderData } from "../pages/api/SharedApi";
import { useRouter, NextRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { DataContext } from "../contexts/LocaleContext";
import { getUserData } from "../pages/api/FolderApi";

export default function Layout({ children }) {
  const router: NextRouter = useRouter();
  const { folderId }: ParsedUrlQuery = router.query;

  const { data: userInfo } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await getUserData();
      return response[0];
    }
  });

  const { data: folderInfo } = useQuery({
    queryKey: ["folderInfo", folderId],
    queryFn: async () => {
      const response = await getFolderData(folderId as string);
      return response[0];
    },
    enabled: !!folderId,
    staleTime: Infinity
  });

  const { data: folderOwnerInfo } = useQuery({
    queryKey: ["userInfo", folderInfo?.user_id],
    queryFn: async () => {
      const response = await getOwnerData(folderInfo.user_id);
      return response[0];
    },
    enabled: !!folderInfo,
    staleTime: Infinity
  });
  console.log("이건뭐지:", folderInfo);

  console;
  return (
    <>
      <DataContext.Provider
        value={{
          folderInfo,
          userInfo
        }}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </DataContext.Provider>
    </>
  );
}
