import '../styles/AddLink.css';

function AddLink() {
  return (
    <div className="add-link">
      <input type="text" placeholder="링크를 추가해 보세요" />
      <button type="button" className="button-primary">
        추가하기
      </button>
    </div>
  );
}

export default AddLink;
