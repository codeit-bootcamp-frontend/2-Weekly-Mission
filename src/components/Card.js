import '../styles/Card.css'
import noImage from '../assets/noImage.svg';
import star from '../assets/star.svg';
import kebab from '../assets/kebab.svg';

const Card = ({ link }) => {
  return(
    <a href={link.url} target="_blank" rel='noopener noreferrer' className="card">
      <img src={star} alt='bookmark icon' className='star--icon'></img>
      <figure className="link-image--container">
        <img src={link.imageSource || noImage} alt="링크 이미지" className="link-image"/>
      </figure>
      <div className="link-detail--container">
        <div className='link-created-ago--container'>
          <p className="link-created-ago">{link.createdAt}</p>
          <img src={kebab} alt='kebab icon' className='kebab--icon'></img>
        </div>
        <p className="link-description">{link.description}</p>
        <p className="link-created-at">{link.createdAt}</p>
      </div>
    </a>
  )
};

export default Card;
