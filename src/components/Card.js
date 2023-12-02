function Card({ data }) {
  return (
    <div className="CardGrid">
      {data && data.map((data) =>
      <div className="Contents">
        <div className="CardContainer">
          <img className="Card" src={data.imageSource} key={data.id} alt="이미지 미리보기"/>
        </div>
      <div className="CardInfoContainer">
        <p className="Description">{data.description}</p>
        <p className="CreatedAt">{data.createdAt}</p>
      </div>
      </div>
      )}
    </div>
  );
}

export default Card;
