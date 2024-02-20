import facebookImg from '../assets/akar-icons_facebook-fill.png';
import twitterImg from '../assets/akar-icons_twitter-fill.png';
import youtubeImg from '../assets/akar-icons_youtube-fill.png';
import instagramImg from '../assets/ant-design_instagram-filled.png';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footerCenter'>
        <p>codeit-2023</p>
        <ul className='gnbOne'>
          <li className='menuOne'>Privacy Policy</li>
          <li className='menuTwo'>FAQ</li>
        </ul>
        <ul className='gnbTwo'>
          <li>
            <a href='https://www.facebook.com/'>
              <img src={facebookImg} alt='' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/'>
              <img src={twitterImg} alt='' />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/'>
              <img src={youtubeImg} alt='' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/'>
              <img src={instagramImg} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
