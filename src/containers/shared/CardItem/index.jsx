import Image from 'next/image';

import styles from './CardItem.module.scss';
import classNames from 'classnames/bind';

import { getDateDiff, getFormatDate } from 'utils';

import { IMAGE_URL } from 'constants/importImg';

const cx = classNames.bind(styles);
const { empty } = IMAGE_URL;

const CardItem = ({ createdAt, url, title, description, imageSource }) => {
  return (
    <div className={cx('card-item')}>
      <a href={url} className={cx('card-item-content')} target='_blank' rel='noreferrer'>
        <div className={cx('card-item-imgbox')}>
          <Image
            fill
            src={imageSource || empty.url}
            alt={title}
            className={cx('card-item-imgbox-img')}
          />
        </div>
        <div className={cx('card-item-textBox')}>
          <span className={cx('card-item-textBox-diff')}>{getDateDiff(createdAt)}</span>
          <p className={cx('card-item-textBox-desc')}>{description}</p>
          <span className={cx('card-item-textBox-date')}>{getFormatDate(createdAt)}</span>
        </div>
      </a>
    </div>
  );
};
export default CardItem;
