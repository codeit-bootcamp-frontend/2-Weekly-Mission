import { RefObject, useEffect, useRef, useState } from 'react';
import AddLinkbar from '@/components/AddLinkbar/AddLinkbar';
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import FolderButtons from '@/components/FolderButtons/FolderButtons';
import SelectedCardList from '@/components/SelectedCardList/SelectedCardList';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/folder.module.css';

export default function Folder() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFolder, setSelectedFolder] = useState({ id: '', name: '전체' });

  const [sideAddLinkbar, setSideAddLinkbar] = useState(false);
  const targets = useRef([]);

  // next.js에서는 IntersectionObserver를 useEffect 내부에 넣어야만 실행된다고 하는데..
  // 내려갈 때는 작동하는데, 올라올 때는 작동하지 않는 이유는? -> target이 바뀔 때마다 콜백을 실행해야할 것 같은데 dependency에 target을 어떻게 지정하지?
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === targets.current[0] && !entry.isIntersecting) {
          setSideAddLinkbar(true);
        }
        if (entry.target === targets.current[0] && entry.isIntersecting) {
          setSideAddLinkbar(false);
        }
        if (entry.target === targets.current[1] && entry.isIntersecting) {
          setSideAddLinkbar(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);
    targets.current.forEach((target: Element) => observer.observe(target));
  }, [targets]);

  return (
    <>
      <Navbar userId='1' />
      <div ref={(el) => (targets.current[0] = el)}>
        <HeaderLayout>
          <AddLinkbar />
        </HeaderLayout>
      </div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <FolderButtons userId='1' folderId={selectedFolder.id} setSelectedFolder={setSelectedFolder} />
      <SelectedCardList selectedFolder={selectedFolder} searchValue={searchValue} />
      <div ref={(el) => (targets.current[1] = el)}>
        <Footer />
      </div>
      {sideAddLinkbar && (
        <div className={styles.addLinkBarFixed}>
          <AddLinkbar />
        </div>
      )}
    </>
  );
}
