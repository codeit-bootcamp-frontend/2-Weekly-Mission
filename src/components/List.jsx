import { useState, useEffect } from 'react';
import { getFolderList, getFolderChangeId } from '../api.jsx';
import FolderList from './FolderList.jsx';

export default function List() {
  const [folderList, setFolderList] = useState(); // api 폴더 목록 데이터
  const [isLoadingSuccess, setIsLoadingSuccess] = useState(false); //로딩 에러 처리
  const [selectedId, setSelectedId] = useState(''); //전제데이터가 들어올수 있도록 처리
  console.log(selectedId);
  const [folderChangeData, setFolderChangeData] = useState([]); // 새로운 상태 추가

  const handleLoad = async (selectedId) => {
    try {
      const Data = await getFolderChangeId(selectedId);
      console.log(Data);
      const { data } = Data || [];
      setFolderChangeData(data);
      console.log(folderChangeData);
    } catch (error) {
      console.error('폴더 데이터를 불러오는데 실패했습니다.', error);
    }
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };
  const loadDataFolderList = async () => {
    const { data } = await getFolderList();
    console.log(data);
    setFolderList(data);
    setIsLoadingSuccess(true);
  };
  console.log(folderList);
  useEffect(() => {
    loadDataFolderList();
    handleLoad(selectedId);
    //특정 상태나 프롭이 변경될 때만 부수 효과를 실행
  }, [selectedId]);
  return (
    <>
      {isLoadingSuccess && (
        <>
          <FolderList
            folderList={folderList}
            selectedId={selectedId}
            handleClick={handleClick}
            folderChangeData={folderChangeData}
          />
        </>
      )}
      {!isLoadingSuccess && <div>저장된 링크가 없습니다.</div>}
    </>
  );
}
