import Image from 'next/image';

import styles from './Feature.module.scss';
import classNames from 'classnames/bind';

import { IMAGE_URL } from 'constants/importImg';

const cx = classNames.bind(styles);

const {
  home: { section1, section2, section3, section4 },
} = IMAGE_URL;

const FeatureContent = () => {
  return (
    <main className={cx('feature-content')}>
      <section className={cx('feature-content-save')}>
        <div className={cx('container')}>
          <div className={cx('sm-hidden')}>
            <div className={cx('feature-wrapper')}>
              <div className={cx('textbox')}>
                <h2 className={cx('textbox-sub-title')}>
                  <span>원하는 링크</span>를 저장하세요
                </h2>
                <p className={cx('textbox-desc')}>
                  나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
                  모든 것을 한 공간에 저장하세요.
                </p>
              </div>
              <div className={cx('imgbox')}>
                <Image src={section1.url} alt={section1.alt} />
              </div>
            </div>
          </div>

          <div className={cx('sm-only')}>
            <div className={cx('feature-wrapper')}>
              <h2 className={cx('textbox-sub-title')}>
                <span>원하는 링크</span>를 저장하세요
              </h2>
              <div className={cx('imgbox')}>
                <Image src={section1.url} alt={section1.alt} />
              </div>
              <p className={cx('textbox-desc')}>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든
                것을 한 공간에 저장하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('feature-content-manage')}>
        <div className={cx('container')}>
          <div className={cx('sm-hidden')}>
            <div className={cx('feature-wrapper')}>
              <div className={cx('textbox')}>
                <h2 className={cx('textbox-sub-title')}>
                  링크를 폴더로 <span>관리</span>하세요
                </h2>
                <p className={cx('textbox-desc')}>
                  나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                </p>
              </div>
              <div className={cx('imgbox')}>
                <Image src={section2.url} alt={section2.alt} />
              </div>
            </div>
          </div>

          <div className={cx('sm-only')}>
            <div className={cx('feature-wrapper')}>
              <h2 className={cx('textbox-sub-title')}>
                링크를 폴더로 <span>관리</span>하세요
              </h2>
              <div className={cx('imgbox')}>
                <Image src={section2.url} alt={section2.alt} />
              </div>
              <p className={cx('textbox-desc')}>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('feature-content-share')}>
        <div className={cx('container')}>
          <div className={cx('sm-hidden')}>
            <div className={cx('feature-wrapper')}>
              <div className={cx('textbox')}>
                <h2 className={cx('textbox-sub-title')}>
                  저장한 링크를 <span>공유</span>해 보세요
                </h2>
                <p className={cx('textbox-desc')}>
                  여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고
                  빠르게 링크를 공유해 보세요.
                </p>
              </div>
              <div className={cx('imgbox')}>
                <Image src={section3.url} alt={section3.alt} />
              </div>
            </div>
          </div>

          <div className={cx('sm-only')}>
            <div className={cx('feature-wrapper')}>
              <h2 className={cx('textbox-sub-title')}>
                저장한 링크를 <span>공유</span>해 보세요
              </h2>
              <div className={cx('imgbox')}>
                <Image src={section3.url} alt={section3.alt} />
              </div>
              <p className={cx('textbox-desc')}>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고
                빠르게 링크를 공유해 보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('feature-content-search')}>
        <div className={cx('container')}>
          <div className={cx('sm-hidden')}>
            <div className={cx('feature-wrapper')}>
              <div className={cx('textbox')}>
                <h2 className={cx('textbox-sub-title')}>
                  저장한 링크를 <span>검색</span>해 보세요
                </h2>
                <p className={cx('textbox-desc')}>
                  중요한 정보들을 검색으로 쉽게 찾아보세요.
                </p>
              </div>
              <div className={cx('imgbox')}>
                <Image src={section4.url} alt={section4.alt} />
              </div>
            </div>
          </div>

          <div className={cx('sm-only')}>
            <div className={cx('feature-wrapper')}>
              <h2 className={cx('textbox-sub-title')}>
                저장한 링크를 <span>검색</span>해 보세요
              </h2>
              <div className={cx('imgbox')}>
                <Image src={section4.url} alt={section4.alt} />
              </div>
              <p className={cx('textbox-desc')}>
                중요한 정보들을 검색으로 쉽게 찾아보세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeatureContent;
