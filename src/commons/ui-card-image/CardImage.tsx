import styles from './CardImage.module.scss';
import classNames from 'classnames/bind';
import { DEFAULT_IMAGE } from './constant';

const cx = classNames.bind(styles);

// 카드 내의 이미지 컴포넌트 프롭 타입 선언
type CardImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

// 카드 내부 이미지 컴포넌트
export const CardImage = ({ imageSource, isZoomedIn, alt }: CardImageProps) => {
  return (
    <div className={cx('container')}>
      <img
        src={imageSource ?? DEFAULT_IMAGE}
        className={cx('image', { zoomin: isZoomedIn })}
        alt={alt}
      />
    </div>
  );
};
