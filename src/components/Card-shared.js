import noneImg from "../assets/noneimg.svg";
import { timeAgo } from "../time";
import KebabModal from "./KebabModal";
import { useState } from "react";
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
      {data &&  
        data.map((data, index) => (
          <div className="Contents">
          <Link to={data.url}>
            <div className="CardContainer">
                <button className="StarImg"></button>
                <img
                  className="Card"
                  src={data.imageSource || noneImg}
                  key={data.id}
                  alt="이미지 미리보기"
                />
              </div>
            </Link>
            <div className="CardInfoContainer">
            <button className="KebabImg" onClick={() => showModal(index)}></button>
              {modalOpen[index] && <KebabModal />}
              <p className="CreatedAt">{timeAgo(data.createdAt)}</p>
              <p className="Description">
                {data.description || "no description"}
              </p>
              <p className="makeDate">{formatDate(data.createdAt)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
