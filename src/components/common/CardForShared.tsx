import emptyCard from 'assets/emptyCard.jpeg';
import styles from 'components/common/Card.module.css';
import Stars from 'components/common/Stars';
import { UserLinkItem } from 'constants/type';
import { getShortDescription, getYYYYMMYY, timeAgo } from 'utils/formatting';

function CardItemForShared({ link }: { link: UserLinkItem }) {
  return (
    <div className={styles.CardItem}>
      <a className={styles.contentBox} href={link.url} target="_blank" rel="noreferrer">
        <div className={styles.imgContainer}>
          <img className={styles.contentImage} src={link.imageSource ?? emptyCard}></img>
          <Stars />
        </div>
        <section className={styles.contentText}>
          <div className={styles.contentNav}>
            <div className={styles.timeCreated}>{timeAgo(link.createdAt)}</div>
            <div className={styles.moreInfoCebap}></div>
          </div>
          <div className={styles.description}>{getShortDescription(link.description)}</div>
          <div className={styles.dateCreated}>{getYYYYMMYY(link.createdAt)}</div>
        </section>
      </a>
    </div>
  );
}

export function CardForShared({ links }: { links: UserLinkItem[] }) {
  return (
    <div className={styles.Cards}>
      {links.map((link) => (
        <CardItemForShared key={link.id} link={link} />
      ))}
    </div>
  );
}
