import facebookImg from "../images/facebook.svg";
import twitterImg from "../images/twitter.svg";
import youtubeImg from "../images/youtube.svg";
import instagramImg from "../images/instagram.svg";

const SOCIAL_IMG = {
  facebook: facebookImg,
  twitter: twitterImg,
  youtube: youtubeImg,
  instagram: instagramImg,
};

function SocialLink({ children }) {
  const href = `https://www.${children}.com/`;
  const src = SOCIAL_IMG[children];
  const alt = `${children} 홈페이지로 연결된 ${children} 로고`;

  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}

export default SocialLink;
