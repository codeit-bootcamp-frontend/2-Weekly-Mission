import avartarImg from "../imgs/avatar.svg";
import "../css/Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="owner-container">
          <img className="owner-avatar" src={avartarImg} alt="아바타 이미지" />
          <span className="folder-owner">@코드잇</span>
        </div>
        <p className="folder-name">⭐️ 즐겨찾기</p>
      </div>
    </section>
  );
}
