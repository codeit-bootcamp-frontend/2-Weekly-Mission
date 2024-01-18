import React from "react";
import Image from "next/image";
import styled from "styled-components";

function SearchInput({
  onSearch,
  searchKeyword,
  setSearchKeyword
}: {
  onSearch: (keyword: string) => Promise<void>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <SearchBox>
        <input
          value={searchKeyword}
          onChange={(e) => {
            onSearch(e.target.value);
            setSearchKeyword(e.target.value);
          }}
          placeholder="링크를 검색해주세요"
        />
        <Image
          width={16}
          height={16}
          src="/images/search.png"
          alt="검색 아이콘"
        />
        <DeleteButton
          onClick={() => {
            onSearch("");
            setSearchKeyword("");
          }}
        >
          <Image
            width={24}
            height={24}
            src="/images/search-close.png"
            alt="검색어 삭제 아이콘"
          />
        </DeleteButton>
      </SearchBox>
      {searchKeyword !== "" ? (
        <SearchResult>
          <span>{searchKeyword}</span>로 검색한 결과입니다.
        </SearchResult>
      ) : null}
    </>
  );
}

const SearchBox = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4rem;

  & input {
    width: 100%;
    padding: 1.6rem 1.6rem 1.5rem 4.25rem;
    border: none;
    border-radius: 1rem;
    background-color: rgb(245, 245, 245, 1);
  }

  & img {
    position: absolute;
    left: 1.8rem;
    top: 32.5%;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 4.8rem;
  top: 23%;
`;

const SearchResult = styled.div`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  color: rgba(159, 166, 178, 1);
  & span {
    color: rgba(55, 55, 64, 1);
  }
`;

export default SearchInput;
