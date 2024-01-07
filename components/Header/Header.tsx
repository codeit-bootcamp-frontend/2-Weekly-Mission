import Link from 'next/link';
import Image from 'next/image';

import Cta from '@/components/Cta/Cta';
import Profile from '@/components/Profile/Profile';

import styles from './Header.module.css';

import { ROUTE } from '../../util/constant';
import { LOGO_IMAGE, TEXT } from './constant';

export default function Header({ profile }: any) {
  return (
    <nav className={styles.Header}>
      <div className={styles.HeaderItems}>
        <Link href={ROUTE.랜딩}>
          <Image className={styles.HeaderLogo} src={LOGO_IMAGE} alt='Linkbrary 서비스 로고' width={133} height={1.6} />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href={ROUTE.로그인}>
            <Cta isSmall>
              <span className={styles.HeaderSignIn}>{TEXT.login}</span>
            </Cta>
          </Link>
        )}
      </div>
    </nav>
  );
}
