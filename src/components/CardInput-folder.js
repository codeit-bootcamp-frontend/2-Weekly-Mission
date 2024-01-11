import "./Style.css";
import Card from "./Card-folder";

function CardInput({ linksData }) {
  return (
    <div className="MainContainer">
      <div className="CardDataContainer">
        <Card data={linksData} />
      </div>
    </div>
  );
}

export default CardInput;
