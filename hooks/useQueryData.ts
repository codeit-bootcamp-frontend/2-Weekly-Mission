import { fetchFolder, fetchLinks, fetchSelectedLinks, fetchUser } from "@/lib/apis";
import { useQuery } from "@tanstack/react-query";

export const useFolderData = () => {
  const { data: folderData, isLoading: folderLoading } = useQuery({
    queryKey: ["folder"],
    queryFn: fetchFolder,
  });
  return { folderData, folderLoading };
};

export const useLinksData = () => {
  const { data: linksData, isLoading: linksLoading } = useQuery({
    queryKey: ["links"],
    queryFn: fetchLinks,
  });
  return { linksData, linksLoading };
};

export const useSelectedLinksData = (id: string) => {
  const queryKey = ["selectedFolder", id];
  const { data: selectedLinksData, isLoading: selectedLoading } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchSelectedLinks(id),
    enabled: !!id,
  });
  return { selectedLinksData, selectedLoading };
};

export const useUserData = () => {
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });
  return { userData, userLoading };
};
