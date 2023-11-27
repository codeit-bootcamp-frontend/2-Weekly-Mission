import "./LinkList.css";

// 카드 링크 생성 날짜 표시 함수
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// 오늘로부터 카드 링크 생성 시간 계산 함수
function elapsedText(value) {
  const today = new Date().getTime();
  const created = new Date(value).getTime();
  const elapsedTime = Math.floor(today - created);

  const minutes = Math.floor(elapsedTime / 1000 / 60);
  const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
  const days = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);
  const months = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 31);
  const years = Math.floor(elapsedTime / 1000 / 60 / 60 / 24 / 31 / 12);

  if (minutes < 2) return "1 minutes ago";
  if (minutes < 60) return `${minutes} minutes ago`;
  if (minutes < 60 * 24) return `${hours} hours ago`;
  if (minutes < 60 * 48) return "1 day ago";
  if (minutes < 60 * 24 * 31) return `${days} days ago`;
  if (minutes < 60 * 24 * 61) return "1 month ago";
  if (minutes < 60 * 24 * 31 * 12) return `${months} months ago`;
  if (minutes < 60 * 24 * 31 * 24) return "1 year ago";
  if ((minutes) => 60 * 24 * 31 * 24) return `${years} months ago`;
}

// 링크 카드 낱개 함수
function LinkListItem({ item }) {
  return (
    <div className="card-container">
      <div className="card-img-wrap">
        <img className="card-img" src={item.imageSource} alt={item.title} />
      </div>
      <div className="test-wrap">
        <p className="elapsedText">{elapsedText(item.createdAt)}</p>
        <h3 className="description">{item.description}</h3>
        <p className="formatDate">{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

// 링크 카드 리스트들 생성 함수
export function LinkList({ items }) {
  return (
    <ul className="card-list">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <LinkListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
