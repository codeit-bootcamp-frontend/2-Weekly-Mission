import React from 'react';
import closeImg from '../../../images/_close.svg';
import '../CSS/modal.css';

export default function AddFolder() {
  return (
    <div className="modal-container">
      <h4 className="modal-title">폴더 추가</h4>
      <form className="modal-form">
        <input className="modal-input" placeholder="내용 입력" />
        <button className="modal-change">추가하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
