import { useState } from "react";
import { Card } from "ui/Card";
import { CardContentOfFolder } from "ui/CardContent/CardContentOfFolder";
import { CardImageOfFolder } from "ui/CardImage/CardImageOfFolder";

export const FolderCards = ({ created_at, url, image_source, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const inputdate = created_at;
  const dateObj = new Date(inputdate);
  const formatteddate = `${dateObj.getFullYear()}. ${dateObj.getMonth() + 1}. ${dateObj.getDate()}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImageOfFolder image_source={image_source} isZoomedIn={isHovered} />
        <CardContentOfFolder description={description} created_at={formatteddate} isHovered={isHovered} />
      </Card>
    </a>
  );
};
