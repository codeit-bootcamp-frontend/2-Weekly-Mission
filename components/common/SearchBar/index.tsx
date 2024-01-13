import { ChangeEvent } from "react";
import * as S from "./styled";
import SearchIcon from "@/public/icons/Search.svg";
import CloseIcon from "@/public/icons/close.svg";

interface SearchBarProps {
  initialState?: () => void;
  handleSearchBar?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function SearchBar({ value, handleSearchBar, initialState }: SearchBarProps) {
  return (
    <>
      <S.InputContainer>
        <S.StyledIcon $iconType="search" as={SearchIcon} left="1.6rem" />
        <S.InputBar
          value={value ?? ""}
          className="searchBar"
          placeholder="링크로 검색해 보세요."
          onChange={handleSearchBar}
        />
        <S.StyledIcon
          $iconType="close"
          as={CloseIcon}
          right="1.6rem"
          onClick={initialState}
          $isClose={!!value?.length}
        />
      </S.InputContainer>
      {value && (
        <S.SearchResult>
          <S.SearchKeyword>{value}</S.SearchKeyword>
          으로 검색한 결과 입니다.
        </S.SearchResult>
      )}
    </>
  );
}

export default SearchBar;
