import cardDefualtImg from '../assets/card_default.png';
import '../styles/Cards.css'
import { formateDate, sinceCreatedDate } from '../utils/formateDate';

function Cards({ folderProfile }) { 
  const { links } = folderProfile;

  return (
    <ul className="card-list">
      {links.map((item) => { 
        return (
          <li className="card-item" key={item.id}>
            <a className="card-link" href={item.url} target="_blank" rel="noreferrer">
              <div className="card-image">
                {<img src={item.imageSource || cardDefualtImg} alt="썸네일 이미지" />}
              </div>
              <div className="card-text">
                <span className="created">{sinceCreatedDate(item.createdAt)}</span>
                <button className="button-kebab" type="button"></button>
                <p className="description">{item.description}</p>
                <span className="date">{formateDate(item.createdAt)}</span>
              </div>
            </a>
            <button className="button-bookmark filled" type="button"></button>
          </li>
        )
      })}
    </ul>
  )
}

export default Cards;


