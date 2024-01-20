import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Links } from "@/types/global.type";
import List from "./Card/List";
import SearchBar from "@/components/common/SearchBar";
import Spinner from "../common/Spinner";

interface ContentProps<T extends Links> {
  children?: ReactNode;
  links: T[];
  isLoading?: boolean;
}

function Content<T extends Links>({ children, links, isLoading }: ContentProps<T>) {
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
    <>
      <SearchBar value={search} handleSearchBar={handleSearchBar} initialState={initialState} />
      {children}
      {isLoading ? <Spinner /> : <List folder={filteredLinks} />}
    </>
  );
}

export default Content;
