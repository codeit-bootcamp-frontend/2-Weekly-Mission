import "../../../css/modal.css";
const AddFolderModal = () => {
  return (
    <>
      <div className="modalTitle">
        <div>폴더추가</div>
      </div>
      <input className="modalInput" placeholder="내용입력" />

      <button className="modalButton">추가하기</button>

      <div></div>
    </>
  );
};

export default AddFolderModal;
