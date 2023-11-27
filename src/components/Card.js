function Card({ data }) {
  return (
    <div className="CardGrid">
      {data && data.map((data) =>
      <div className="Contents">
      <img className="Card" src={data.imageSource} key={data.id}/>
      <p className="Description">{data.description}</p>
      <p className="CreatedAt">{data.createdAt}</p>
      </div>
      )}
    </div>
  );
}

export default Card;
