import styles from 'components/common/Card.module.css';
import Stars from 'components/common/BookmarkButton';
import { LinkItem } from 'constants/type';
import { getShortDescription, getYYYYMMYY, timeAgo } from 'utils/formatting';

import KebabButtons from './KebabButton';

interface CardItemProps {
  link: LinkItem;
}

export default function CardItem({ link }: CardItemProps) {
  // null값을 가진 link가 들어오는 경우 -> nullish 사용
  // const link = {
  //   created_at: "2023-06-30T08:07:41.588529+00:00"
  //   url: "https://bootcamp-api.codeit.kr/docs"
  //   id: 192
  //   description: null
  //   folder_id: null
  //   image_source: null
  //   title: null
  //   updated_at: null
  // }

  return (
    <a className={styles.contentBox} href={link.url ?? `''`} target="_blank" rel="noreferrer">
      <div className={styles.imgContainer}>
        <img className={styles.contentImage} src={link.image_source ?? '/assets/emptyCard.jpeg'}></img>
        <Stars />
      </div>
      <section className={styles.contentText}>
        <div className={styles.contentNav}>
          <div className={styles.timeCreated}>{timeAgo(link.created_at ?? `''`)}</div>
          <KebabButtons link={link} />
        </div>
        <div className={styles.description}>{getShortDescription(link.description ?? `''`)}</div>
        <div className={styles.dateCreated}>{getYYYYMMYY(link.created_at ?? `''`)}</div>
      </section>
    </a>
  );
}
