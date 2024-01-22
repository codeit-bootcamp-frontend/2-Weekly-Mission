import React from 'react';
import '../CSS/modal.css';
import closeImg from '../../../images/_close.svg';

export default function DeleteLink() {
  return (
    <div className="modal-container">
      <h4 className="modal-title">링크 삭제</h4>
      <form className="modal-form">
        <label htmlFor="" className="modal-folder-title"></label>
        <button className="modal-Delete">삭제하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
