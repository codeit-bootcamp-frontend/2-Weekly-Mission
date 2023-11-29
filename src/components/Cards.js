import cardDefualtImg from '../images/card_default.png';
import '../styles/Cards.css'

function formateDate(value) {
  const date = new Date(value)
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
}

function Cards({ folderProfile }) { 
  const { links } = folderProfile;

  return (
    <ul className="card-list">
      {links.map((item) => { 
        return (
          <li className="card-item" key={item.id}>
            <a className="card-link" href={item.url} target="_blank">
              <div className="card-image">
                {<img src={item.imageSource || cardDefualtImg} alt="썸네일 이미지" />}
              </div>
              <div className="card-text">
                <span className="created">10 minutes ago</span>
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


