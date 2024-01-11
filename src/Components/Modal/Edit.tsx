import React from 'react';
import '../../CSS/modal.css';
import closeImg from '../../images/_close.svg';

export default function Edit() {
  return (
    <div className="modal-container">
      <h4 className="modal-title">폴더 이름 변경</h4>
      <form className="modal-form">
        <input className="modal-input" placeholder="유용한 팁" />
        <button className="modal-change">변경하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
