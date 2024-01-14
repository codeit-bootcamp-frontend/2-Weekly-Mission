import style from './LinkCard.module.css';
import noImage from '@/src/assets/noImage.svg';
import star from '@/src/assets/star.svg';
import kebab from '@/src/assets/kebab.svg';
import { MouseEvent, useState } from 'react';
import SelectMenu from './SelectMenu';
import { dateDiff } from '@/lib/util/dateDiff';
import { LinkType } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';

const LinkCard = ({ link } : { link:LinkType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const createdAt = link.createdAt || link['created_at'];
  const createdDate = new Date(createdAt);
  const createdDateString = `${createdDate.getFullYear()}. ${createdDate.getMonth() + 1}. ${createdDate.getDate()}`
  const nowDate = new Date();
  const imgSource = link.imageSource || link['image_source'];

  const handleKebobIconClick = (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return(
    <Link href={link.url} target="_blank" rel='noopener noreferrer' className={style.card}>
      <div className={style['star--icon']}>
        <Image src={star} alt='bookmark icon' fill />
      </div>
      <figure className={style['link-image--container']}>
        <img src={imgSource || noImage} alt="링크 이미지" className={style['link-image']}/>
      </figure>
      <div className={style["link-detail--container"]}>
        <div className={style['link-created-ago--container']}>
          <p className={style['link-created-ago']}>{dateDiff(createdDate, nowDate)}</p>
          <button onClick={handleKebobIconClick} className={style.btn}>
            <Image src={kebab} alt='kebab icon' fill />
          </button>
        </div>
        <p className={style['link-description']}>{link.description}</p>
        <p className={style['link-createdat']}>{createdDateString}</p>
      </div>
      {menuOpen && <SelectMenu />}
    </Link>
  )
};

export default LinkCard;
