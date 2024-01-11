import React from 'react';
import CloseImg from '../../images/_close.svg';
import KakaoIcon from '../../images/kakao.svg'
import FacebookIcon from '../../images/facebook.svg'
import LinkIcon from '../../images/link.svg'
export default function Share() {
  return (
    <div className="modal-container">
      <h4 className="modal-title">폴더 공유</h4>
      <label className="modal-folder-title">폴더명</label>
      <div className='modal-share-box'>
      <button className='modal-share-kakao'><img src={KakaoIcon} alt="카카오톡 공유하기" /></button>
      <button className='modal-share-facebook'><img src={FacebookIcon} alt="페이스북 공유하기" /></button>
      <button className='modal-share-copy'><img src={LinkIcon} alt="현재 폴더 링크 복사하기" /></button>
      </div>
      <button className="modal-close">
        <img src={CloseImg} alt="closeBtn" />
      </button>
    </div>
  );
}
