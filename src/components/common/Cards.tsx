import CardItem from 'components/common/CardItem';
import { LinkItem } from 'constants/type';

import styles from './Card.module.css';

export function Cards({ links }: { links: LinkItem[] }) {
  return (
    <div className={styles.Cards}>
      {links.map((link: LinkItem) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
