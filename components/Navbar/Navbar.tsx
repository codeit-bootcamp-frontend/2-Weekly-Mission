import Link from 'next/link';
import Image from 'next/image';

import useGetData from '@/lib/useGetData';
import { UserData } from '@/lib/apiTypes';

import CTA from '../CTA/CTA';
import Profile from '../Profile/Profile';

import LogoIcon from '@/public/images/logo.svg';

import styles from './Navbar.module.css';

interface Props {
  userId?: string;
  className?: 'sticky' | '';
}

export default function Navbar({ userId, className = '' }: Props) {
  const [loading, error, profileData] = useGetData<UserData>(`/users/${userId}`);

  if (loading) return;
  if (error) return;

  // todo: 위에 if(!profileData) return; 이런 식으로 하면 오류가 사라지기는 하는데.. 그럼 이 return문에 navbar전체를 한번 더 써줘야하는건가?
  const { name, email, image_source: imageSource } = profileData[0];

  return (
    <nav className={`${styles.navbar} ${styles[className]}`}>
      <div className={styles.container}>
        <Link href='/'>
          <Image
            className={styles.logo}
            src={LogoIcon}
            width={133}
            height={24}
            alt='메인 페이지로 이동하는 링크브러리 아이콘'
            priority={true}
          />
        </Link>
        {profileData ? (
          <Profile name={name} email={email} imageSource={imageSource} />
        ) : (
          <Link href='/'>
            <CTA text='로그인' className='fixedWidth' />
          </Link>
        )}
      </div>
    </nav>
  );
}
