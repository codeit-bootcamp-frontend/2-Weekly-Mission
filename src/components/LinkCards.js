import sampleImg from "../images/sample-card-image.png";

/* 이 컴포넌트에서 가져와야 하는 데이터:
1. createdAt
2. description
3. title */

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// folder 내 link 배열의 각 요소
function LinkCard({ link }) {
  return (
    <div>
      <img src={sampleImg} alt={link.title} />
      <div>
        <p> 몇 분 전 </p>
        <p>{link.title}</p>
        <p>{formatDate(link.createdAt)}</p>
      </div>
    </div>
  );
}

// folder 내 link 배열
function LinkCards({ links }) {
  return (
    <div>
      {links.map((link) => {
        return (
          <>
            <LinkCard link={link} />
          </>
        ); //TODO link 받아와야 함
      })}
      s
    </div>
  );
}

export default LinkCards;
