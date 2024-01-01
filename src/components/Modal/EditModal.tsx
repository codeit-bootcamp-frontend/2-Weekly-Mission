import style from '../../styles/Modal/EditModal.module.css';
import xbutton from '../../assets/x.svg';

const EditModal = () => {
  return(
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <p className={style.title}>폴더 이름 변경</p>
          <form action="" className={style.modalForm}>
            <input type="text" className={style.modalInput} placeholder='내용 입력'/>
            <button className={style.modalButton}>변경하기</button>
          </form>
        </div>
        <button className={style.xButton}><img src={xbutton} alt="x" /></button>
      </div>
    </div>
  )
};

export default EditModal;
