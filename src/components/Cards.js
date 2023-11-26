import cardDefaultImg from '../images/card_default.png';
import '../styles/Cards.css'

function Cards() { 
  return (
    <div className="cards">
      <div className="card">
        <a href="https://www.codeit.kr/" target="_blank">
          <div className="card-image">
            <img src={cardDefaultImg} alt="썸네일 이미지" />
          </div>
          <div className="card-text">
            <span className="created">10 minutes ago</span>
            <button className="button-kebab" type="button"></button>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <span className="date">2023. 3. 15</span>
          </div>
        </a>
        <button className="button-bookmark filled" type="button"></button>
      </div>
    </div>
  )
}

export default Cards;


