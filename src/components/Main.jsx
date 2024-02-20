import LinkInput from './LinkInput';

import List from './List';
import '../css/Main.css';

export default function Main() {
  return (
    <main>
      <div className='middle'>
        <LinkInput />
        <List />
      </div>
    </main>
  );
}
