import { useCallback, useEffect } from 'react';
import { axiosInstance } from '@/src/sharing/util';
import { mapLinksData } from '@/src/link/util-map/mapLinksData';
import { useAsync } from '@/src/sharing/util';
import { ALL_LINKS_ID } from './constant';
import { SelectedFolderId } from '@/src/folder/type';
import { LinkRawData } from '@/src/link/type';
import { formatLinkRawData } from '../util-map';
import { useQuery } from '@tanstack/react-query';

export const useGetLinks = (folderId?: SelectedFolderId) => {
  const queryString = folderId === ALL_LINKS_ID ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get<{ folder: LinkRawData[] }>(`links${queryString}`),
    [queryString]
  );

  const { isPending, isError, data } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
    enabled: !!folderId,
  });

  const linksData =
    data?.data?.folder?.map(formatLinkRawData).map(mapLinksData) ?? [];

  return { isPending, isError, data: linksData };
};
