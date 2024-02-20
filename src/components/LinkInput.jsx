import searchImg from '../assets/Search.svg';
import '../css/LinkInput.css';

export default function LinkInput() {
  return (
    <div className='mainTop'>
      <img src={searchImg} alt='' />
      <p>링크를 검색해 보세요.</p>
    </div>
  );
}
