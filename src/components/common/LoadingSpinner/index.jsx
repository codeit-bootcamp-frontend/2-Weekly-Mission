import { FadeLoader } from 'react-spinners';

import styles from './LoadingSpinner.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Spinner = () => {
  return (
    <div className={cx('loading-spinner')}>
      <div className={cx('spinner')}>
        <FadeLoader color='#ffffff' />
        <h1>LOADING...</h1>
      </div>
    </div>
  );
};

export default Spinner;
