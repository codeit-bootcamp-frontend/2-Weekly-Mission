import section1 from 'assets/images/img-landing-01.png';
import section2 from 'assets/images/img-landing-02.png';
import section3 from 'assets/images/img-landing-03.png';
import section4 from 'assets/images/img-landing-04.png';
import emptyThumbnail from 'assets/images/empty-card-img.jpg';

import logo from 'assets/svgs/logo.svg';
import IconEyeOn from 'assets/svgs/eye-on.svg';
import IconEyeOff from 'assets/svgs/eye-off.svg';
import emptyAvatar from 'assets/svgs/codeit.svg';
import favoriteDefault from 'assets/svgs/star-default.svg';
import favoriteActive from 'assets/svgs/star-active.svg';
import liked from 'assets/svgs/link.svg';
import kakao from 'assets/svgs/kakao.svg';
import facebook from 'assets/svgs/facebook.svg';
import linkcopy from 'assets/svgs/link.svg';
import IconClosed from 'assets/svgs/close.svg';
import IconSearch from 'assets/svgs/search.svg';
import IconAdd from 'assets/svgs/add.svg';
import IconAddWhite from 'assets/svgs/add-sm.svg';
import IconDelete from 'assets/svgs/delete.svg';
import IconEdit from 'assets/svgs/pen.svg';
import IconShared from 'assets/svgs/share.svg';
import IconMoreMenu from 'assets/svgs/more.svg';

export const IMAGE_URL = {
  home: {
    section1: {
      url: section1,
      alt: '링크 저장 이미지',
    },
    section2: {
      url: section2,
      alt: '폴더 관리 이미지',
    },
    section3: {
      url: section3,
      alt: '링크 공유 이미지',
    },
    section4: {
      url: section4,
      alt: '링크 검색 이미지',
    },
  },
  empty: {
    url: emptyThumbnail,
    alt: '기본 썸네일 이미지',
  },
};

export const ICON = {
  logo: {
    url: logo,
    alt: 'linkbrary 로고 이미지',
  },
  eye: {
    off: {
      url: IconEyeOff,
      alt: '비밀번호 숨기기',
    },
    on: {
      url: IconEyeOn,
      alt: '비밀번호 보기',
    },
  },
  star: {
    default: {
      url: favoriteDefault,
      alt: '즐겨찾기 아이콘-off',
    },
    active: {
      url: favoriteActive,
      alt: '즐겨찾기 아이콘-on',
    },
  },
  avatar: {
    default: {
      url: emptyAvatar,
      alt: '기본 이미지',
    },
  },
  liked: {
    url: liked,
    alt: '링크 추가하기 아이콘',
  },
  shared: {
    kakao: {
      url: kakao,
      alt: '카카오톡 심볼 아이콘',
    },
    facebook: {
      url: facebook,
      alt: '페이스북 심볼 아이콘',
    },
    linkcopy: {
      url: linkcopy,
      alt: '링크 아이콘',
    },
  },
  close: {
    url: IconClosed,
    alt: '닫기 아이콘',
  },
  search: {
    url: IconSearch,
    alt: '검색바 아이콘',
  },
  Addfilter: {
    lg: {
      url: IconAdd,
      alt: '필터 추가하기 아이콘',
    },
    sm: {
      url: IconAddWhite,
      alt: '필터 추가하기 아이콘',
    },
  },
  filterOption: {
    shared: {
      url: IconShared,
      alt: '폴더 공유하기 아이콘',
    },
    edit: {
      url: IconEdit,
      alt: '폴더 수정하기 아이콘',
    },
    remove: {
      url: IconDelete,
      alt: '폴더 삭제하기 아이콘',
    },
  },
  more: {
    url: IconMoreMenu,
    alt: '더보기 메뉴 아이콘',
  },
};
