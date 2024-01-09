import { useEffect, useState } from "react";
import { getLinks } from "@/lib/api";
import { LinkData } from "@/lib/utils/type";
import Kebab from "./Kebab";
import formatTimeAgo from "@/lib/utils/formatTimeAgo";
import formatDate from "@/lib/utils/formatDate";
import Link from "next/link";
import Image from "next/image";
import styles from "./FolderCardList.module.css";

// interface StyledCardProps {
//   href: string;
// }

interface FolderCardProps {
  card: LinkData;
}

interface FolderCardListProps {
  folderId: any;
  link?: LinkData[];
}

function FolderCard({ card }: FolderCardProps) {
  const timeAgo = formatTimeAgo(card.created_at);
  const date = formatDate(card.created_at);

  return (
    <Link className={styles.card} href={card.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.imgContainer}>
        {card.image_source ? (
          <img className={styles.cardImg} width={340} height={200} src={card.image_source} alt={card.title} />
        ) : (
          <Image className={styles.cardImg} width={340} height={200} src="/images/folder/noimage.svg" alt="no Image" />
        )}
        <Image
          className={styles.starImg}
          width={34}
          height={34}
          src="/images/folder/star-default.png"
          alt="bookmark icon"
        />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoTop}>
          <p className={styles.timeAgo}>{timeAgo}</p>
          <Kebab />
        </div>
        <p className={styles.linksDescription}>{card.description}</p>
        <p className={styles.createdAt}>{date}</p>
      </div>
    </Link>
  );
}

function FolderCardList({ folderId }: FolderCardListProps) {
  const [links, setLinks] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const apiEndpoint: any = folderId ? `${folderId}` : ``;

      const link = await getLinks(apiEndpoint);
      setLinks(link.data);
    };

    fetchLinks();
  }, [folderId]);

  return (
    <>
      {links && links.length > 0 ? (
        <div className={styles.cards}>
          {links.map((card) => {
            return <FolderCard key={card.id} card={card} />;
          })}
        </div>
      ) : (
        <div>
          <div className={styles.noLink}>저장된 링크가 없습니다</div>
        </div>
      )}
    </>
  );
}

export default FolderCardList;
