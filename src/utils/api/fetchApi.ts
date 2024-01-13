import API from 'constants/api';
import { UserInfo, SampleUserFolder, UserLinkItem, FolderItem, LinkItem } from 'constants/type';

const convertToSnakeCase = (links: UserLinkItem[]): LinkItem[] => {
  const convertedLinks = links.map((link) => {
    return Object.fromEntries(
      Object.entries(link).map(([key, value]) => [key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`), value])
    ) as LinkItem;
  });
  return convertedLinks;
};

export async function getSampleUserFolder() {
  const result = await fetch(API.SAMPLE_FOLDER);
  const { folder } = await result.json();
  const { links } = folder;
  folder.links = convertToSnakeCase(links);

  return folder as SampleUserFolder;
}

export async function getFolder() {
  const result = await fetch(API.USER_FOLDER);
  const { data } = await result.json();
  return data as FolderItem[];
}

export async function getLinks(folderId: number) {
  const query = +folderId === 0 ? '' : `?folderId=${folderId}`; // 쿼리 없는 경우 전체 링크 불러오기
  const result = await fetch(`${API.USER_LINKS}${query}`);
  const { data } = await result.json();
  return data as LinkItem[];
}

export async function getUser() {
  const result = await fetch(API.USER_INFO);
  const { data } = await result.json();
  return data as UserInfo[];
}
