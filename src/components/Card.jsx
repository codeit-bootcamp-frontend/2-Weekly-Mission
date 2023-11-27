import "./Card.css";
import kebab from "./images/kebab.svg";

function Card() {
  return (
    <div className="Card">
      <div className="Card-img" />
      <div className="Card-contents">
        <div className="Card-info">
          <p>10 minutes ago</p>
          <img src={kebab} alt="kebab"></img>
        </div>
        <p className="Card-text">
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat. Tldkd
        </p>
        <p className="Card-date">2023.3.15</p>
      </div>
    </div>
  );
}

export default Card;
