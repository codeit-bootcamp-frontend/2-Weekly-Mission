function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function LinkListItem({ item }) {
  return (
    <div>
      <img src={item.imageSource} alt={item.title} />
      <div>
        <h3>{item.description}</h3>
        <p>{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

export function LinkList({ items }) {
  return (
    <ul>
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
