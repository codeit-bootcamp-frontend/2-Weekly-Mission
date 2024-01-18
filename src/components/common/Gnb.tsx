import dynamic from 'next/dynamic';
import LoginButton from 'components/common/LoginButton';
import { UserInfo } from 'constants/type';
const Profile = dynamic(() => import('components/others/Profile'), { ssr: false });

import styles from './Gnb.module.css';

function Gnb({ userData }: { userData: UserInfo }) {
  const userProfile = userData;

  const didLogin = !!userProfile.id;
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nav}>
        <a href="index.html">
          <img src="/assets/logo.svg" className="logo-img" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {didLogin ? <Profile profile={userProfile} /> : <LoginButton />}
      </div>
    </nav>
  );
}

export default Gnb;
