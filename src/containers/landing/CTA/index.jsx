import styles from './CTA.module.scss';
import classNames from 'classnames/bind';

import LinkButton from 'components/common/Button/LinkButton';

const cx = classNames.bind(styles);

const CTA = () => {
  return (
    <section className={cx('call-to-action')}>
      <div className={cx('container')}>
        <div className={cx('row')}>
          <div className={cx('col')}>
            <h2 className={cx('title')}>
              <span className={cx('br', 'title-br')}>
                <span className={cx('title-gradient')}>세상의 모든 정보</span>를
              </span>
              <span className={cx('br')}>쉽게 저장하고 </span>
              <span className={cx('br')}>관리해 보세요</span>
            </h2>
            <LinkButton
              path='/signup'
              text='링크 추가하기'
              size='md'
              className={'btn-default btn-signup'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
