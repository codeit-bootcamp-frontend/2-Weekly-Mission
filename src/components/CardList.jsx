function CreateDate(fileList) {
  const createdAtDate = new Date(fileList.time);
  const year = createdAtDate.getFullYear();
  const month = createdAtDate.getMonth() + 1;
  const day = createdAtDate.getDate();

  return `${year}.${month}.${day}`;
}

function CalculateTime(fileList) {
  const creationDate = new Date(fileList.time);
  const currentDate = new Date();
  const diffInSeconds = Math.floor((currentDate - creationDate) / 1000);

  if (diffInSeconds < 120) {
    return '1 minute ago';
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  } else if (diffInSeconds < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  }
}

function MainCardItem({ fileList }) {
  console.log(fileList);
  const { created_at, image_source, description, url } = fileList;

  const handleclick = () => {
    window.open(url);
  };
  return (
    <div onClick={handleclick}>
      <div className='listContentImg'>
        <img src={image_source} alt='' />
      </div>
      <div className='listContentText'>
        <p className='textOne'>
          <CalculateTime time={created_at} />
        </p>
        <p className='textTwo'>{description}</p>
        <p className='textThree'>
          <CreateDate time={created_at} />
        </p>
      </div>
    </div>
  );
}

export default function CardList({ folderChangeData }) {
  console.log({ folderChangeData });

  return (
    <ul className='mainBottom'>
      {folderChangeData.map((fileList) => {
        console.log(fileList.id);
        return (
          <li key={fileList.id}>
            <MainCardItem fileList={fileList} />
          </li>
        );
      })}
    </ul>
  );
}
