import React from 'react';
import closeImg from '../../images/_close.svg';

export default function DeleteLink({ children }) {
  return (
    <div className="modal-container">
      <h4 className="modal-title">링크 삭제</h4>
      <form className="modal-form">
        <label htmlFor="" className='modal-folder-title'>{children}</label>
        <button className="modal-Delete">삭제하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
