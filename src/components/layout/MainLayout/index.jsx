import classNames from 'classnames/bind';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('main-layout')}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
