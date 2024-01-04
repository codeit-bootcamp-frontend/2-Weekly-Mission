import { mapLinksData } from '../../../link/util/map/mapLinksData';
import { DEFAULT_FOLDER_DATA } from './constant';
import { SampleFolderRawData } from '../../type';

// 폴더 데이터 매칭 시키는 함수
export const mapFolderData = (folder?: SampleFolderRawData) => {
  if (!folder) return DEFAULT_FOLDER_DATA;

  const { name, owner, links } = folder;

  //   데이터가 없을 경우 예외 처리
  return {
    profileImage: owner?.profileImageSource ?? '',
    ownerName: owner?.name ?? '',
    folderName: name ?? '',
    links: links?.map(mapLinksData) ?? [],
  };
};
