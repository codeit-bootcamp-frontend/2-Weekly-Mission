import { LinkItem } from 'constants/type';

export default function filterLinks(searchKeyword: string, linkList: LinkItem[]): LinkItem[] {
  return linkList.filter((link) =>
    Object.values(link).some(
      (value) => typeof value === 'string' && value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );
}
