import "./CardList.css";
import Options from "../Options/Options";
import { CardTab } from "../CardTab/CardTab";

export const CardList = ({ children }) => {
  return (
    <div>
      <CardTab />
      <div className="titleIconsContainer">
        <h2 className="title">유용한 글</h2>
        <Options />
      </div>
      <div className="CardList">{children}</div>
    </div>
  );
};
