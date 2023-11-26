import React from "react";
import classNames from "classnames";
import "./Card.css";
import { openLinkOnNewTab } from "../../utility/linkUtil";
import { toKRDateString } from "../../utility/timeUtil";

function Card({ classNameList = [], data }) {
  const { id, createdAt, url, title, description, imageSource } = data;

  return (
    <article
      className={`card ${classNames(classNameList)}`}
      onClick={() => openLinkOnNewTab(url)}
    >
      <CardImage src={imageSource} title={title} />
      <CardInfo content={description} createdAt={createdAt} />
    </article>
  );
}

function CardImage({ src, title }) {
  return (
    <>
      {src ? (
        <div className="card__image-container">
          <img className="card__image" src={src} alt={title} />
        </div>
      ) : (
        <div className="card__image-container card__image-container_no-image">
          <img
            className="card__image card__image_no-image"
            src="../../image/folder/logo.svg"
            alt={title}
          />
        </div>
      )}
    </>
  );
}

function CardInfo({ content, createdAt }) {
  return (
    <div className="card__info">
      <p className="card__created-before">{formatCreatedBefore(createdAt)}</p>
      <p className="card__content">{content}</p>
      <p className="card__created-at">{formatCreatedAt(createdAt)}</p>
    </div>
  );
}

function formatCreatedAt(createdAt) {
  const date = new Date(createdAt);

  return toKRDateString(date);
}

function formatCreatedBefore(createdAt) {
  const date = new Date(createdAt);
  const now = new Date();
  const diff = now - date;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(diff / 2592000000);
  const years = Math.floor(diff / 31536000000);

  if (years) {
    if (years === 1) return `${years} year ago`;
    else return `${years} years ago`;
  } else if (months) {
    if (months === 1) return `${months} month ago`;
    else return `${months} months ago`;
  } else if (days) {
    if (days === 1) return `${days} day ago`;
    else return `${days} days ago`;
  } else if (hours) {
    if (hours === 1) return `${hours} hour ago`;
    else return `${hours} hours ago`;
  } else if (minutes) {
    if (minutes === 1) return `${minutes} minute ago`;
    else return `${minutes} minutes ago`;
  } else {
    return `1 minute ago`;
  }
}

export default Card;
