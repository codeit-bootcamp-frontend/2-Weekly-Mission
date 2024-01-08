import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Dropdown from '../Dropdown/Dropdown';
import dateFormat from '@/lib/dateFormat';
import timeFormat from '@/lib/timeFormat';
import emptyImg from '@/public/images/emptyImage.svg';
import StarImg from '@/public/images/star.svg';
import KebabImg from '@/public/images/kebab.svg';
import styles from './Card.module.css';

interface Props {
  link: {
    id: string;
    title: string;
    created_at: string;
    description: string;
    image_source: string;
    url: string;
  };
}

export default function Card({ link: { id, title, created_at, description, image_source, url } }: Props) {
  const [logTime, setLogTime] = useState('');
  const [viewDropBox, setViewDropBox] = useState(false);

  const date = dateFormat(created_at);

  useEffect(() => {
    setLogTime(timeFormat(created_at));
  }, []);

  return (
    <a className={styles.card} href={url} target='_blank' rel='noreferrer noopener'>
      <div className={styles.imageContainer}>
        {image_source ? (
          // todo: 이건 Image 태그를 쓰려면 어떻게 해야 하지 ?
          <img className={styles.image} src={image_source} alt={title} />
        ) : (
          <Image className={styles.image} src={emptyImg} alt={`비어있는 ${title} 이미지`} width={340} height={200} />
        )}
      </div>
      <button className={styles.addBookmarkIcon}>
        <Image src={StarImg} alt='즐겨찾기 추가' width={34} height={34} />
      </button>
      <div className={styles.info}>
        <div className={styles.logTimeAndKebab}>
          <p className={styles.logTime}>{logTime}</p>
          <div className={styles.kebabContainer}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setViewDropBox(!viewDropBox);
              }}
            >
              <Image src={KebabImg} alt='개별 링크 삭제 혹은 폴더에 추가하기 기능 리스트 토글' width={21} height={17} />
            </button>
            {viewDropBox && (
              <Dropdown className={styles.dropdownPosition} setViewDropBox={setViewDropBox} url={url} id={id} />
            )}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </a>
  );
}
