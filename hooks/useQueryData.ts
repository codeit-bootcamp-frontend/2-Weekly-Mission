import { fetchFolder, fetchFolderDetail, fetchLinks, fetchSelectedLinks, fetchUser } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useFolderData = () => {
  const { data: folderData, isLoading: folderLoading } = useQuery({
    queryKey: QUERY_KEYS.folder,
    queryFn: fetchFolder,
  });
  return { folderData, folderLoading };
};
export const useFolderDetailData = (id: string) => {
  const { data: folderDetailData, isLoading: folderDetailLoding } = useQuery({
    queryKey: QUERY_KEYS.selectedFolder(id),
    queryFn: () => fetchFolderDetail(id),
  });
  return { folderDetailData, folderDetailLoding };
};

export const useLinksData = () => {
  const { data: linksData, isLoading: linksLoading } = useQuery({
    queryKey: QUERY_KEYS.links,
    queryFn: fetchLinks,
  });
  return { linksData, linksLoading };
};

export const useSelectedLinksData = (id: string) => {
  const { data: selectedLinksData, isLoading: selectedLoading } = useQuery({
    queryKey: QUERY_KEYS.selectedFolderLinks(id),
    queryFn: () => fetchSelectedLinks(id),
    enabled: !!id,
  });
  return { selectedLinksData, selectedLoading };
};

export const useUserData = () => {
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: QUERY_KEYS.user,
    queryFn: fetchUser,
  });
  return { userData, userLoading };
};
