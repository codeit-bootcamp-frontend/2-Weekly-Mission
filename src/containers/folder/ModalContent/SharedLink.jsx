import { useEffect } from 'react';

import styles from './SharedLink.module.scss';
import classNames from 'classnames/bind';

import { shareKakaoLink } from 'utils/shareKaKaoLink';
import IconButton from 'components/common/Button/IconButton';

import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);

const {
  shared: { kakao, facebook, linkcopy },
} = ICON;

const ShareLink = ({ currentFolderId }) => {
  const userId = 1;
  const currentURL = window.location.href;
  const shareURL = `${currentURL}/shared?user=${userId}&folder=${currentFolderId}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    script.async = true;

    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const shareFacebookLink = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(shareURL)}`);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (e) {
      console.error('[LINK COPY ERROR]', e);
    }
  };

  return (
    <ul className={cx('share-list')}>
      <li className={cx('share-list-item')}>
        <IconButton
          label='카카오톡 공유하기 아이콘'
          svg={kakao.url}
          alt={kakao.alt}
          iconSize={42}
          onClick={() => shareKakaoLink(shareURL, kakao.url)}
        />
        <p>카카오톡</p>
      </li>
      <li className={cx('share-list-item')}>
        <IconButton
          label='페이스북 공유하기 아이콘'
          svg={facebook.url}
          alt={facebook.alt}
          iconSize={42}
          onClick={shareFacebookLink}
        />
        <p>페이스북</p>
      </li>
      <li className={cx('share-list-item')}>
        <div className={cx('share-list-item-icon')}>
          <IconButton
            label='링크 복사 아이콘'
            svg={linkcopy.url}
            alt={linkcopy.alt}
            iconSize={18}
            onClick={() => handleCopyClipBoard(shareURL)}
          />
        </div>
        <p>링크복사</p>
      </li>
    </ul>
  );
};

export default ShareLink;
