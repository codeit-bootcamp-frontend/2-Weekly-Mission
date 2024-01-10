import styled from "styled-components";

function FolderListButton({ list, setToggleList, setSelectedId }) {
  const toggleChange = () => {
    setToggleList(list.id);
  };

  return (
    <>
      <ListButton onClick={toggleChange}>{list.name}</ListButton>
    </>
  );
}

export default FolderListButton;

const ListButton = styled.button`
  width: fit-content;
  padding: 1rem 1.2rem;
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #6d6afe;
  background: #fff;
  font-size: 1.6rem;
  font-weight: 400;

  &:hover {
    background: #6d6afe;
    color: #fff;
  }
`;