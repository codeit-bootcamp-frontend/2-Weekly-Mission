import "./AddLinkbar.css";
import { LINK_IMAGE } from "./constant";

export const AddLinkbar = () => {
  return (
    <div className="FolderInfo">
      <div className="SearchBar">
        <input className="AddLink-input" type="search" placeholder="링크를 추가해 보세요." />
        <img src={LINK_IMAGE} alt="링크추가창의 링크이미지" className="icon" />
        <div className="AddButton">
          <button className="AddButton_">추가하기</button>
        </div>
      </div>
    </div>
  );
};
