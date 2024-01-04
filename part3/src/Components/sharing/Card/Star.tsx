import React, { MouseEvent } from 'react';
import starImg from '../../../img/star.svg';
import selected from '../../../img/selected.svg';

interface Props {
  isSelected: number | null;
  onClick: (e: MouseEvent) => void;
  id: number;
}

export default function Star({ isSelected, onClick, id }: Props) {
  return (
    <img
      onClick={onClick}
      className="star"
      src={isSelected === id ? selected : starImg}
      alt="즐겨찾기 버튼"
    ></img>
  );
}
