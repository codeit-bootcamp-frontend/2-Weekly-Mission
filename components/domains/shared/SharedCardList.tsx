import Image from "next/image";
import { getSharedFolders } from "@/lib/api";
import { useEffect, useState } from "react";
import styles from "./SharedCardList.module.css";
import formatTimeAgo from "@/lib/utils/formatTimeAgo";
import formatDate from "@/lib/utils/formatDate";
import Link from "next/link";

// interface StyledCardProps {
//   href: string;
// }

interface Link {
  id: number;
  url: string;
  imageSource: string;
  title: string;
  description: string;
  createdAt: number;
}

interface SharedCardProps {
  card: Link;
}

const noImage = "/noimage.svg";

function SharedCard({ card }: SharedCardProps) {
  const timeAgo = formatTimeAgo(card.createdAt);
  const date = formatDate(card.createdAt);

  return (
    <div className={styles.imgContainer}>
      <Link className={styles.card} href={card.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.cardImg}>
          <Image src={card.imageSource || noImage} fill alt={card.title} />
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.timeAgo}>{timeAgo}</p>
          <p className={styles.linksDescription}>{card.description}</p>
          <p className={styles.createdAt}>{date}</p>
        </div>
      </Link>
    </div>
  );
}

function SharedCardList() {
  const [folder, setFolder] = useState<Link[]>([]);

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getSharedFolders();
      setFolder(folder.links);
    };
    handleFolder();
  }, []);

  return (
    <div className={styles.cards}>
      {folder.map((card) => {
        return <SharedCard key={card.id} card={card} />;
      })}
    </div>
  );
}

export default SharedCardList;
