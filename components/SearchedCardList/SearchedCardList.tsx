import CardList from '@/components/CardList/CardList';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import useGetData from '@/lib/useGetData';
import { LinkList } from '@/lib/apiTypes';
import styles from './SearchedCardList.module.css';

interface SearchedProps {
  userId: string;
  folderId: string | string[] | undefined;
  searchValue: string;
}

export default function SearchedCardList({ userId, folderId = '', searchValue = '' }: SearchedProps) {
  const query = folderId ? `?folderId=${folderId}` : '';
  const [loading, error, links] = useGetData<LinkList>(`/users/${userId}/links${query}`, folderId);

  if (loading) return;
  if (error) return;

  const selectedLinks = searchValue
    ? links?.filter(({ url, title, description }) =>
        [url, title, description].some((key) => key?.toUpperCase().includes(searchValue.toUpperCase()))
      ) ?? []
    : links;
  return <>{selectedLinks?.length === 0 ? <EmptyCardList /> : <CardList links={selectedLinks} />}</>;
}
