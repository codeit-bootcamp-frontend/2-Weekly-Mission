import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import FolderListButton from "./FolderListButton";
import AddList from "../../public/addList.svg";

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
            <ButtonWrapper>
              <UtilButton>
                <FlexContainer>
                  <Image
                    src="/share.svg"
                    alt="공유 이미지"
                    width={18}
                    height={18}
                  />
                  <span>공유</span>
                </FlexContainer>
              </UtilButton>
              <UtilButton>
                <FlexContainer>
                  <Image
                    src="/edit.svg"
                    alt="변경 이미지"
                    width={18}
                    height={18}
                  />
                  <span>이름변경</span>
                </FlexContainer>
              </UtilButton>
              <UtilButton>
                <FlexContainer>
                  <Image
                    src="/delete.svg"
                    alt="삭제 이미지"
                    width={15}
                    height={15.8}
                  />
                  <span>삭제</span>
                </FlexContainer>
              </UtilButton>
            </ButtonWrapper>
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
  font-weight: 600;
  letter-spacing: -0.02rem;
`;

const UtilButton = styled.button`
  border: none;
  color: #9fa6b2;
  font-size: 1.4rem;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
