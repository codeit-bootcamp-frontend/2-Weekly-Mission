import '../css/Header.css';
import link from '../assets/link.svg';
export default function Header() {
  return (
    <header>
      <div className='headerCenter'>
        <img src={link} alt='' />
        <input class='addLink' placeholder='링크를 추가해 보세요' />
        <button type='button'>추가하기</button>
      </div>
    </header>
  );
}
