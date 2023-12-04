import { getElapsedTime } from "../../util/getElapsedTime";
import { formatDate } from "../../util/formatDate";
import "./Card.css";
import DEFAULT_IMAGE from "../../images/card-default.png";
import { useState } from "react";

export const Card = ({ created_at, description, image_source, title }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const classNameImgHover = isHovering ? "CardImage CardHover" : "CardImage";

  const classNameContentHover = isHovering
    ? "CardContent CardHover"
    : "CardContent";

  return (
    <div
      className="Card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={classNameImgHover}
        style={{ backgroundImage: `url(${image_source ?? DEFAULT_IMAGE})` }}
        alt="title"
      />
      <div className={classNameContentHover}>
        <span className="CC-elapsed-time">{getElapsedTime(created_at)}</span>
        <p className="CC-description">{description}</p>
        <span className="CC-created-at">{formatDate(created_at)}</span>
      </div>
    </div>
  );
};
