import { IconDelete, IconEdit, IconShare } from "./Constant";
import "./Options.css";

const Options = () => {
  return (
    <div>
      <button className="OptionBtn">
        <img src={IconShare} alt="공유 아이콘" />
        공유
      </button>
      <button className="OptionBtn">
        <img src={IconEdit} alt="수정 아이콘" />
        수정
      </button>
      <button className="OptionBtn">
        <img src={IconDelete} alt="삭제 아이콘" />
        삭제
      </button>
    </div>
  );
};

export default Options;
