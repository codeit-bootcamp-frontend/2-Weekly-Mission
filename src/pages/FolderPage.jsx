import { useState, useEffect } from 'react';
import { getData } from '../api.jsx';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import '../css/style.css';

function FolderPage() {
  const [items, setItems] = useState([]);

  //api 데이터 넘겨받아 구조분해 할당
  const loadData = async () => {
    const { email } = await getData();
    setItems({
      email,
    });
    console.log(setItems);
  };

  useEffect(() => {
    loadData();
  }, []);

  // 코드는 React 컴포넌트에서 사용자 데이터를 가져오는 비동기 작업이 완료되기 전에
  // 렌더링이 발생하는 경우를 다루기 위한 코드
  if (items === null) {
    return <></>;
  }
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <Nav items={items} />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default FolderPage;
