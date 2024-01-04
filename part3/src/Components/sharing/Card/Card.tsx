import React, { MouseEvent, useState } from 'react';
import kebab from '../../../img/kebab.svg';
import noneImg from '../../../img/!img.svg';
import { timeAgo } from '../../../util/time';
import PopOver from './PopOver';
import Star from './Star';
import '../../../css/card.css';
import DeleteLinkModal from '../Modals/DeleteLinkModal';
import AddLinkModal from '../Modals/AddLinkModal';

function formatDate(value: string | number) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

interface BtnProps {
  id: number;
  name: string;
  link: { count: number };
}

interface Card {
  created_at?: string | number;
  createdAt?: string | number;
  description: string;
  image_source?: string;
  imageSource?: string;
  title: string;
  url: string;
  id: number;
  folder_Id?: number;
}

interface Props {
  card: Card;
  buttons?: BtnProps[];
  isModal: string | null | number;
  handleModal: (e: MouseEvent<HTMLElement>) => void;
  isSelected: number | null;
  isKebab: number | null;
  handleSelect: (id: number) => void;
  handleKebab: (id: number) => void;
}

export default function Card({
  card,
  handleModal,
  isModal,
  buttons,
  isSelected,
  isKebab,
  handleSelect,
  handleKebab,
}: Props) {
  const {
    created_at,
    createdAt,
    description,
    image_source,
    imageSource,
    title,
    url,
    id,
  } = card;

  const displayCreatedAt: number | string = (
    createdAt !== undefined ? createdAt : created_at
  ) as number | string;

  return (
    <>
      <div className="card">
        <a href={url} className="cardImgBox">
          <img
            className="cardImg"
            src={imageSource || image_source || noneImg}
            alt={title}
          />
        </a>
        <Star
          onClick={() => handleSelect(id)}
          id={id}
          isSelected={isSelected}
        />
        <img
          className="kebab"
          src={kebab}
          alt="기능 버튼"
          onClick={() => handleKebab(id)}
        />
        {isKebab === id && <PopOver cardId={id} handleModal={handleModal} />}

        <a href={url} className="cardText">
          <p className="timeAgo">{timeAgo(displayCreatedAt)}</p>
          <h6 className="cardDescription">{description}</h6>
          <p className="makeDate">{formatDate(displayCreatedAt)}</p>
        </a>
      </div>
      {isModal === `${id}delete` && (
        <DeleteLinkModal url={url} handleModal={handleModal} />
      )}
      {isModal === `${id}add` && (
        <AddLinkModal buttons={buttons} handleModal={handleModal} url={url} />
      )}
    </>
  );
}
