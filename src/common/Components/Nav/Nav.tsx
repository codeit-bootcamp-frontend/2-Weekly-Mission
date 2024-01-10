import logo from '@/src/assets/logo.svg'
import style from './Nav.module.css'
import { useSharedPageUser } from '@/src/shared/hooks/sharedPageHooks';
import { useFolderPageUser } from '@/src/folder/hooks/folderPageHooks';
import { UserType } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UserProfile = ({profile} : {profile:UserType | undefined}) => {
  if(!profile) return;

  return(
    <div className={style['profile--box']}>
      <div className={style['profile-image']}>
        <Image src={profile.profileImageSource || profile['image_source']} alt='프로필 아이콘' fill/>
      </div>
      <p className={`${style['profile-email']}`}>{profile?.email}</p>
    </div>
  )
};

const Nav = () => {
  const router = useRouter();
  const sharedPageUser = useSharedPageUser();
  const folderPageUser = useFolderPageUser();

  return(
    <header className={`${style['landing--header']} ${router.pathname === '/folder' ? style['no-fixed'] : ''}`}>
      <div className={`${style['header-bar']}`}>
        <Link href="/" className={style['landing--logo']}>
          <Image src={logo} alt="logo" fill/>
        </Link>
        {router.pathname === '/shared' && (sharedPageUser?.email === '' ? <Link href="./signin.html" className={`${style['login--btn']}`}>로그인</Link> : <UserProfile profile={sharedPageUser} />)}
        {router.pathname === '/folder' && (folderPageUser?.email === '' ? <Link href="./signin.html" className={`${style['login--btn']}`}>로그인</Link> : <UserProfile profile={folderPageUser} />)}
        {(router.pathname !== '/shared' && router.pathname !== '/folder') && (sharedPageUser?.email === '' ? <Link href="./signin.html" className={`${style['login--btn']}`}>로그인</Link> : <UserProfile profile={sharedPageUser} />)}
      </div>
    </header>
  )
};

export default Nav;
