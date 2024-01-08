import API from 'constants/api';
import { SampleUserFolder, UserLinkItem, linkItem } from 'constants/type';

const convertToSnakeCase = (links: UserLinkItem[]): linkItem[] => {
  const convertedLinks = links.map((link) => {
    return Object.fromEntries(
      Object.entries(link).map(([key, value]) => [key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`), value])
    ) as linkItem;
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
  const body = await result.json();
  return body;
}

export async function getLinks(folderId: number) {
  const query = +folderId === 0 ? '' : `?folderId=${folderId}`; // 쿼리 없는 경우 전체 링크 불러오기
  const result = await fetch(`${API.USER_LINKS}${query}`);
  const body = await result.json();
  return body;
}

export async function getUser() {
  const result = await fetch(API.USER_INFO);
  const body = await result.json();
  return body;
}
