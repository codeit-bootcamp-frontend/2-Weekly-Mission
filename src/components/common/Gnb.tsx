import LoginButton from 'components/common/LoginButton';
import Profile from 'components/others/Profile';

import styles from './Gnb.module.css';
import { UserInfo } from 'constants/type';

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
