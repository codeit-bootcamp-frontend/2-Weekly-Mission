import { useEffect, useRef, useState } from 'react';
import AddLinkbar from '@/components/AddLinkbar/AddLinkbar';
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout';
import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import FolderButtons from '@/components/FolderButtons/FolderButtons';
import SelectedCardList from '@/components/SelectedCardList/SelectedCardList';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/folder.module.css';

type Target = HTMLDivElement;
type Targets = Target[];

export default function Folder() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFolder, setSelectedFolder] = useState({ id: '', name: '전체' });

  const [sideAddLinkbar, setSideAddLinkbar] = useState(false);
  const targets = useRef<Targets>([]);

  // todo: 두 요소 모두 isIntersecting이 false일 때 setSideAddLinkbar를 true 변경하는 법
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
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
    targets.current.forEach((target) => observer.observe(target));
  }, [sideAddLinkbar]);

  return (
    <>
      <Navbar userId='1' />
      <div ref={(el: Target) => (targets.current[0] = el)}>
        <HeaderLayout>
          <AddLinkbar />
        </HeaderLayout>
      </div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <FolderButtons userId='1' folderId={selectedFolder.id} setSelectedFolder={setSelectedFolder} />
      <SelectedCardList selectedFolder={selectedFolder} searchValue={searchValue} />
      <div ref={(el: Target) => (targets.current[1] = el)}>
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
