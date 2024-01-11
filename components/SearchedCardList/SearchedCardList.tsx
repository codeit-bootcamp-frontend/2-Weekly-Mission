import CardList from '@/components/CardList/CardList';
import useGetData from '@/lib/useGetData';
import styles from './SearchedCardList.module.css';
import EditFeatures from '../EditFeatures/EditFeatures';
import EmptyCardList from '../EmptyCardList/EmptyCardList';

interface SearchedProps {
  userId: string;
  folderId: string | string[] | undefined;
  searchValue: string;
}

type List = {
  id: string;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: string;
};

export type LinkListType = List[];

export default function SearchedCardList({ userId, folderId = '', searchValue = '' }: SearchedProps) {
  const query = folderId ? `?folderId=${folderId}` : '';
  const [loading, error, links] = useGetData<LinkListType>(`/users/${userId}/links${query}`, folderId);

  if (loading) return;
  if (error) return;

  const selectedLinks = searchValue
    ? links?.filter(({ url, title, description }) =>
        [url, title, description].some((key) => key?.toUpperCase().includes(searchValue.toUpperCase()))
      ) ?? []
    : links;
  return <>{selectedLinks?.length === 0 ? <EmptyCardList /> : <CardList links={selectedLinks} />}</>;
}
