function ListButton({ list, setToggleList }) {

  const toggleChange = () => {
    setToggleList(list.id);
  };

  return (
    <>
      <button className="ListButton" onClick={toggleChange}>
        {list.name}
      </button>
      <div></div>
    </>
  );
}

export default ListButton;
