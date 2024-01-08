import socialKakao from 'assets/svgs/social-kakao.svg';
import socialGoogle from 'assets/svgs/social-google.svg';
import IconFacebook from 'assets/svgs/facebook-1.svg';
import IconTwitter from 'assets/svgs/twitter.svg';
import IconYoutube from 'assets/svgs/youtube.svg';
import IconInstagram from 'assets/svgs/instagram.svg';

export const FOOTER_SOCIAL_LIST = [
  {
    id: 1,
    url: 'https://www.facebook.com/?locale=ko_KR',
    label: 'facebook 링크 버튼',
    icon: {
      url: IconFacebook,
      alt: '페이스북 아이콘',
    },
  },
  {
    id: 2,
    url: 'https://twitter.com/?lang=ko',
    label: 'twitter 링크 버튼',
    icon: {
      url: IconTwitter,
      alt: '트위터 아이콘',
    },
  },
  {
    id: 3,
    url: 'https://www.youtube.com/',
    label: 'youtube 링크 버튼',
    icon: {
      url: IconYoutube,
      alt: '유튜브 아이콘',
    },
  },
  {
    id: 4,
    url: 'https://www.instagram.com/',
    label: 'instagram 링크 버튼',
    icon: {
      url: IconInstagram,
      alt: '인스타그램 아이콘',
    },
  },
];

export const SOCIAL_LOGIN = [
  {
    id: 1,
    url: 'https://www.google.com/',
    src: socialGoogle,
    alt: '소셜 로그인-구글',
  },
  {
    id: 2,
    url: 'https://www.kakaocorp.com/page/',
    src: socialKakao,
    alt: '소셜 로그인-카카오',
  },
];

export const SELECT_MENU = [
  {
    id: 1,
    name: '삭제하기',
    type: 'remove',
  },
  {
    id: 2,
    name: '폴더에 추가',
    type: 'add',
  },
];
