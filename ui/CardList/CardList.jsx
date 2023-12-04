import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = ({ links }) => {
  const { data } = links;

  return (
    <div className="CardList">
      {data?.map((one) => (
        <Card key={one.id} {...one} />
      ))}
    </div>
  );
};
