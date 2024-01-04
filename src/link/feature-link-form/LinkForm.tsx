import classNames from 'classnames/bind';
import styles from './LinkForm.module.scss';

const cx = classNames.bind(styles);

// 링크 입력 폼 숨김 타입 선언
type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

// 링크 입력하는 폼 컴포넌트
export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  return <div className={cx('container')}></div>;
};
