import { DEFAULT_IMAGE } from './constant';
import styles from './CardImage.module.css';

export default function CardImage({ imageSource, alt, isZoomedIn }: any) {
  const className = isZoomedIn ? `${styles.CardImage} ${styles.CardImageZoomIn}` : styles.CardImage;
  return <div style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }} className={className} />;
  // return <div style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }} className={className} alt={alt} />;
}
