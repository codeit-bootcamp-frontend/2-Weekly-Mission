import CardList from './CardList';
import '../css/FolderList.css';
export default function FolderList({ folderList, selectedId, handleClick, folderChangeData }) {
  console.log(folderList);
  console.log(handleClick);
  console.log(selectedId);
  console.log(folderChangeData);
  return (
    <>
      <div className='mainList'>
        <ul>
          <li key='' onClick={() => handleClick('')} className={'' === selectedId ? 'click' : ''}>
            전체
          </li>
          {folderList.map((item) => {
            return (
              <li key={item.id} onClick={() => handleClick(item.id)} className={item.id === selectedId ? 'click' : ''}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <p className='listTitle'>
        {selectedId === '' ? '전체' : selectedId && folderList.find((item) => item.id === selectedId)?.name}
      </p>
      <CardList folderChangeData={folderChangeData} />
    </>
  );
}
