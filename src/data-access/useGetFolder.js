import { mapFolderData } from "../util/mapFolderData"; // folder 데이터를 받아서 유저정보와 링크배열을 객체로 반환해주는 컴포넌트
import { useAsync } from "../util/useAsync"; //
import { axiosInstance } from "../util/axiosInstance";

export const useGetFolder = () => {
  const getUser = () => axiosInstance.get("sample/folder");

  const { loading, error, data } = useAsync(getUser);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
