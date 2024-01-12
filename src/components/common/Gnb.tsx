import LoginButton from 'components/common/LoginButton';
import Profile from 'components/others/Profile';
import { getUser } from 'pages/api/fetchApi';
import { useEffect, useState } from 'react';

import styles from './Gnb.module.css';
import { UserInfo } from 'constants/type';

function Gnb() {
  const [profile, setProfile] = useState<UserInfo>({
    id: 0,
    created_at: '',
    name: '',
    image_source: '',
    email: '',
    auth_id: '',
  });

  async function handleLoadProfile() {
    const data = await getUser();
    setProfile(data[0]);
  }

  useEffect(() => {
    handleLoadProfile();
  }, []);

  const didLogin = !!profile.id;
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nav}>
        <a href="index.html">
          <img src="/assets/logo.svg" className="logo-img" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {didLogin ? <Profile profile={profile} /> : <LoginButton />}
      </div>
    </nav>
  );
}

export default Gnb;
