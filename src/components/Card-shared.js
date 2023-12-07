import noneImg from '../assets/noneimg.svg'
import { timeAgo } from '../time';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ data }) {
  return (
    <div className="CardGrid">
      {data && data.map((data) =>
      <div className="Contents">
        <div className="CardContainer">
          <img className="Card" src={data.imageSource || noneImg} key={data.id} alt="이미지 미리보기"/>
        </div>
      <div className="CardInfoContainer">
      <p className="CreatedAt">{timeAgo(data.createdAt)}</p>
        <p className="Description">{data.description || "no description"}</p>
        <p className="makeDate">{formatDate(data.createdAt)}</p>
      </div>
      </div>
      )}
    </div>
  );
}

export default Card;
