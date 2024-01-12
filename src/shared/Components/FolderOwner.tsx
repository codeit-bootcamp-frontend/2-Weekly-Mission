import Image from 'next/image';
import style from './FolderOwner.module.css';
import { OwnerType } from '@/types/type';

const FolderOwner = ({owner, name}:{ owner:OwnerType, name:string}) => {
  return(
    <section className={`${style['owner--section']}`}>
      <div className={`${style['owner-content']}`}>
        <div className={`${style['owner-info--container']}`}>
          <div className={style['owner-profile-image']}>
            <Image src={owner?.profileImageSource} alt="프로필 이미지" fill />
          </div>
          <p className={`${style['owner-pofile-name']}`}>@{owner?.name}</p>
        </div>
        <h1 className={`${style['bookmark-title']}`}>{name}</h1>
      </div>
    </section>
  )
};

export default FolderOwner;
