import style from '../../styles/Modal/DeleteModal.module.css';
import xbutton from '../../assets/x.svg';

const DeleteModal = () => {
  return(
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.contentContainer}>
            <p className={style.title}>폴더 삭제</p>
            <p className={style.description}>폴더명</p>
          </div>
          <button className={style.modalButton}>삭제하기</button>
        </div>
        <button className={style.xButton}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

export default DeleteModal;
