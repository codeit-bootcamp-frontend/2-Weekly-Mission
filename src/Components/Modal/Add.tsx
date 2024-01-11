import React from 'react';
import closeImg from '../../images/_close.svg';
import '../../CSS/modal.css';

export default function Add() {
  return (
    <div className="modal-container">
      <h4 className="modal-title">폴더에 추가</h4>
      <label className="modal-folder-title">링크 주소</label>
      <form className="modal-form">
        <button className="modal-change">추가하기</button>
      </form>
      <button className="modal-close">
        <img src={closeImg} alt="closeBtn" />
      </button>
    </div>
  );
}
