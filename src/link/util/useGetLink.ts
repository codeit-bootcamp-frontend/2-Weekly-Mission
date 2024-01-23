import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { mapLinksData } from './map/mapLinksData';
import { useAsync } from '@/src/commons/util/useAsync';
import { ALL_LINKS_ID } from './constant';
import { SelectedFolderId } from '@/src/folder/type';
import { LinkRawData } from '../type';
import { useCallback, useEffect } from 'react';

// 링크 데이터 가져오는 커스텀 훅
export const useGetLink = (folderId: SelectedFolderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () =>
      axiosInstance.get<{ data: { folder: LinkRawData[] } }>(
        `links${queryString}`
      ),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: getLinks,
    reload: !!folderId,
  });

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    updated_at,
    url,
    image_source,
    title,
    description,
  }: LinkRawData) => ({
    id,
    createdAt: created_at,
    updatedAt: updated_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData =
    data?.data.folder?.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
