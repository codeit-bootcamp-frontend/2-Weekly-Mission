import noneImg from "../assets/noneimg.svg";
import { timeAgo } from "../time";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ data }) {
  return (
    <div className="CardGrid">
      {data &&
        data.map((data) => (
          <div className="Contents">
            <div className="CardContainer">
              <button className="StarImg"></button>
              <img
                className="Card"
                src={data.image_source || noneImg}
                key={data.id}
                alt="이미지 미리보기"
              />
            </div>
            <div className="CardInfoContainer">
              <button className="KebabImg"></button>
              <p className="CreatedAt">{timeAgo(data.created_at)}</p>
              <p className="Description">
                {data.description || "no description"}
              </p>
              <p className="makeDate">{formatDate(data.created_at)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
