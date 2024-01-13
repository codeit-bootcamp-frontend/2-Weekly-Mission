import Card from '../Card/Card';
import { LinkListType } from '../SearchedCardList/SearchedCardList';
import styles from './CardList.module.css';

type link = {
  id: string;
  title: string;
  created_at: string;
  description: string;
  image_source: string;
  url: string;
};

// 그냥 이렇게 하는게 맞는지?
interface Props {
  links: LinkListType | null;
}

export default function CardList({ links }: Props) {
  const listItems = links?.map((link: link) => (
    <li key={link.id}>
      <Card link={link} />
    </li>
  ));

  return <ul className={styles.cards}>{listItems}</ul>;
}
