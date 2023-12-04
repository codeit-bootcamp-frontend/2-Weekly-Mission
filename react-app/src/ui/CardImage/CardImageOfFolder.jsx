import "./CardImage.css";
import { DEFAULT_IMAGE } from "./constant";

export const CardImageOfFolder = ({ image_source, isZoomedIn }) => {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return <div style={{ backgroundImage: `url(${image_source ?? DEFAULT_IMAGE})` }} className={className} alt="{alt}" />;
};
