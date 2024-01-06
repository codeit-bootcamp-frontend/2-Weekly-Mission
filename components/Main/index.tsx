import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchBar from "../SearchBar";
import List from "../Card/List";
import { Links } from "@/types/global.type";
import { Article } from "./styled";

interface MainProps<T extends Links> {
  children?: ReactNode;
  links: T[];
}

function Main<T extends Links>({ children, links }: MainProps<T>) {
  const [search, setSearch] = useState<string>("");
  const [filteredLinks, setFilteredLinks] = useState<T[]>([]);
  const debouncedValue = useDebounce<string>(search, 500);

  const handleSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setSearch(value);
  };

  const initialState = () => {
    setSearch("");
  };

  useEffect(() => {
    if (debouncedValue) {
      const filtered = links.filter(
        (link) =>
          (link.url && link.url.includes(debouncedValue)) ||
          (link.title && link.title.includes(debouncedValue)) ||
          (link.description && link.description.includes(debouncedValue))
      );
      setFilteredLinks(filtered);
    } else {
      setFilteredLinks(links);
    }
  }, [debouncedValue, links]);

  return (
    <Article>
      <SearchBar value={search} handleSearchBar={handleSearchBar} initialState={initialState} />
      {children}
      <List folder={filteredLinks} />
    </Article>
  );
}

export default Main;
