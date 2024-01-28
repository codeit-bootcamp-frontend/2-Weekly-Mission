import React from 'react';
import closeImg from '../../../images/_close.svg';
import '../CSS/modal.css';

export default function Add({
  setAddModal,
  linksValue,
}: {
  linksValue: string;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="my-modal">
      <div className="mask"></div>
      <div className="modal-container">
        <h4 className="modal-title">폴더에 추가</h4>
        <label className="modal-folder-title">{linksValue}</label>
        <form className="modal-form">
          <button className="modal-change">추가하기</button>
        </form>
        <button
          className="modal-close"
          onClick={() => {
            setAddModal(false);
          }}
        >
          <img src={closeImg} alt="closeBtn" />
        </button>
      </div>
    </div>
  );
}
