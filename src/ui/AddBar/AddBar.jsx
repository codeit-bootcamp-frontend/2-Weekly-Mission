import ADD_IMAGE from "../../images/add.svg";
import "./AddBar.css";

export const AddBar = () => {
  return (
    <div className="AddBar">
      <form className="AddBar-input-container">
        <input
          className="AddBar-input"
          type="input"
          placeholder="링크를 추가해 보세요."
        />
        <img
          src={ADD_IMAGE}
          alt="링크 입력창인 것을 알려주는 링크 아이콘"
          className="AddBar-icon"
        />
        <button type="click" className="Cta">
          추가하기
        </button>
      </form>
    </div>
  );
};
