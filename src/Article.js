import React from "react";
import "./style.css";
import searchIcon from "./img/Search.png";
import cardImg from "./img/image 7.png";

function Article() {
  return (
    <div className="article">
      <div className="search">
        <img className="searchIcon" src={searchIcon} alt="검색 아이콘" />
        <span>링크를 검색해 보세요.</span>
      </div>
      <div className="cardBox">
        <div className="card">
          <img className="cardImg" src={cardImg} alt="카드 이미지" />
          <div className="textBox">
            <span className="time">10 minutes ago</span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat....
            </span>
            <span>2023. 3. 15</span>
          </div>
        </div>
        <div className="card">
          <img className="cardImg" src={cardImg} alt="카드 이미지" />
          <div className="textBox">
            <span className="time">10 minutes ago</span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat....
            </span>
            <span>2023. 3. 15</span>
          </div>
        </div>
        <div className="card">
          <img className="cardImg" src={cardImg} alt="카드 이미지" />
          <div className="textBox">
            <span className="time">10 minutes ago</span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat....
            </span>
            <span>2023. 3. 15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
