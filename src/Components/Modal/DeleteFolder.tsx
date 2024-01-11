import React from 'react';
import closeImg from '../../images/_close.svg';

export default function DeleteFolder({ children }) {
  return (
    <div className="modal-container">
      <h4 className="modal-title">폴더 삭제</h4>
      <form className="modal-form">
        <label htmlFor="">{children}</label>
        <button className="modal-Delete">삭제하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
