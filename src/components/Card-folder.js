import noneImg from "../assets/noneimg.svg";
import { timeAgo } from "../time";
import { useState } from "react";
import KebabModal from "./KebabModal";
import { Link } from "react-router-dom";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ data }) {
  const [modalOpen, setModalOpen] = useState(Array(data).fill(false));
  const showModal = (index) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = !newModalOpen[index];
    setModalOpen(newModalOpen);
  }

  return (
    <div className="CardGrid">
      {data ? (data.map((data, index) => (
          <div className="Contents">
            <Link to={data.url} target="_blank">
              <div className="CardContainer">
                <button className="StarImg"></button>
                <img
                  className="Card"
                  src={data.image_source || noneImg}
                  key={data.id}
                  alt="이미지 미리보기"
                />
              </div>
            </Link>
            <div className="CardInfoContainer">
            {modalOpen[index] && <KebabModal />}
            <button className="KebabImg" onClick={() => showModal(index)}></button>
              <p className="CreatedAt">{timeAgo(data.created_at)}</p>
              <p className="Description">
                {data.description || "no description"}
              </p>
              <p className="makeDate">{formatDate(data.created_at)}</p>
            </div>
          </div>
        ))) : (
          <p>"저장된 링크가 없습니다"</p>
        )}
        
    </div>
  );
}

export default Card;
