import { LinkList, Link } from '@/lib/apiTypes';
import Card from '../Card/Card';
import styles from './CardList.module.css';

export default function CardList({ links }: { links: LinkList }) {
  const listItems = links?.map((link: Link) => (
    <li key={link.id}>
      <Card link={link} />
    </li>
  ));

  return <ul className={styles.cards}>{listItems}</ul>;
}
