import { useState } from "react";
import styled from "styled-components";
import FolderListButton from "./FolderListButton";
import AddList from "../../public/addList.svg";
import ShareImg from "../../public/share.svg";
import EditImg from "../../public/edit.svg";
import DeleteImg from "../../public/delete.svg";

function FolderList({ lists }) {
  const [toggleList, setToggleList] = useState(0);
  const [selectedId, setSelectedId] = useState("");

  return (
    <>
      <FolderListContainer>
        <ListButtonContainer>
          <div>
            <ListButton onClick={() => setToggleList(0)}>전체</ListButton>
            {lists?.data.map((list) => {
              return (
                <FolderListButton
                  key={list.id}
                  list={list}
                  setToggleList={() => setToggleList(list.name)}
                  setSelectedId={() => setSelectedId(list.id)}
                />
              );
            })}
          </div>
          <AddListButton />
        </ListButtonContainer>
        <ToggleListNameContainer>
          {toggleList === 0 ? (
            ""
          ) : (
            <ToggleListName>{toggleList}</ToggleListName>
          )}
          {toggleList !== 0 && (
            <EditButton>
              <button className="Share">공유</button>
              <button className="Edit">이름 변경</button>
              <button className="Delete">삭제</button>
            </EditButton>
          )}
        </ToggleListNameContainer>
      </FolderListContainer>
    </>
  );
}

export default FolderList;

const FolderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 107rem;
  margin: 4rem auto;
`;

const ListButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 105rem;
`;

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

const AddListButton = styled.button`
  background-image: url(${AddList});
  background-repeat: no-repeat;
  background-size: cover;
  width: 2rem;
  height: 2rem;
`;

const ToggleListNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0 1rem;
`;

const ToggleListName = styled.div`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

const EditButton = styled.button`
  border: none;
  color: #9fa6b2;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  & .Share {
    background-image: url(${ShareImg});
    background-repeat: no-repeat;
    background-position: left;
    width: 7rem;
  }

  & .Edit {
    background-image: url(${EditImg});
    background-repeat: no-repeat;
    background-position: left;
    width: 10rem;
  }

  & .Delete {
    background-image: url(${DeleteImg});
    background-repeat: no-repeat;
    background-position: left;
    width: 7rem;
  }
`;
