import CardItem from 'components/common/CardItem';
import { linkItem } from 'constants/type';

import styles from './Card.module.css';

export function Cards({ links }: { links: linkItem[] }) {
  return (
    <div className={styles.Cards}>
      {links.map((link: linkItem) => (
        <CardItem key={link.id} link={link} />
      ))}
    </div>
  );
}
