import Image from 'next/image';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import { ICON } from 'constants/importImg';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
const { close } = ICON;

const Modal = ({
  isModalOpen,
  handleModalClose,
  modalTitle,
  subTitle,
  renderContent = null,
  children = null,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      shouldCloseOnOverlayClick={true}
      contentLabel='common-label'
      className={cx('modal')}
      overlayClassName={cx('modal-overlay')}
      bodyOpenClassName={cx('body-open')}
    >
      <header className={cx('modal-header')}>
        <button
          className={cx('modal-header-btn-close')}
          aria-label='모달창 닫기 버튼'
          onClick={handleModalClose}
        >
          <Image src={close.url} alt={close.alt} width={18} height={18} />
        </button>
        <div className={cx('modal-header-inner')}>
          <h1 className={cx('modal-header-inner-title')}>{modalTitle}</h1>
          <p className={cx('modal-header-inner-sub')}>{subTitle}</p>
        </div>
      </header>
      {renderContent}
      {children}
    </ReactModal>
  );
};

export default Modal;
