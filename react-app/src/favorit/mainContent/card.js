import { isValidElement, useState } from "react";
import "./mainContent.css";

export function CardItem({ item }) {
  const alt = "사이트 이미지";

  const Slicing = () => {
    if (item.description.length > 76) {
      return item.description.slice(0, 70) + ".....";
    } else {
      return item.description;
    }
  };

  const ago = () => {
    const targetDate = new Date(item.createdAt);
    const currentDate = new Date();
    const timeDifference = Math.floor(currentDate - targetDate) / (1000 * 60);

    if (timeDifference < 2) {
      return "1 minute ago";
    } else if (timeDifference <= 59) {
      return timeDifference + " minute ago";
    } else if (timeDifference >= 60 && timeDifference <= 119) {
      return "1 hour ago";
    } else if (timeDifference <= 239) {
      return Math.floor(timeDifference / 60) + " hour ago";
    } else if (timeDifference >= 1440 && timeDifference <= 2879) {
      //1일 이상 2일이하
      return "1 day ago";
    } else if (timeDifference <= 44639) {
      //31일미만
      return Math.floor(timeDifference / 1440) + " days ago";
    } else if (timeDifference >= 44640 && timeDifference <= 86400) {
      return "1 month ago";
    } else if (timeDifference <= 525599) {
      return Math.floor(timeDifference / 43800) + " month ago ";
    } else {
      return Math.floor(timeDifference / 525600) + "years ago";
    }
  };
  console.log(ago());

  const date = new Date(item.createdAt).toLocaleDateString().slice(0, -1);

  return (
    <section>
      <a href={item.url}>
        <div className="img">
          <img className="cardImg" src={item.imageSource} alt={alt} />
        </div>
        <div className="detail">
          <p className="timeAgo">{ago()}</p>
          {/* <h1 className="title">{item.title}</h1> */}
          <p className="description">{Slicing()}</p>
          <p className="date">{date}</p>
        </div>
      </a>
    </section>
  );
}

export function CardList({ items }) {
  return (
    <div className="cardGrid">
      {items.map((item) => {
        return <CardItem item={item} />;
      })}
    </div>
  );
}
