import { Link } from "react-router-dom";
import { Layout } from "feature/Layout";
import "./FolderPage.css";
import { useGetFolder } from "data-access/useGetFolder";
import { CardList } from "../../ui/CardList";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";
import { SearchBar } from "../../ui/SearchBar";
import { useState } from "react";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data || {};
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFolder = () => {
    console.log("++++++++++");
    const searchValueLower = searchValue.toLowerCase().split(" ");
    links.forEach((link) => {
      if (
        searchValueLower.every((value) =>
          link.url.toLowerCase().includes(value)
        ) ||
        (link.title &&
          searchValueLower.every((value) =>
            link.title.toLowerCase().includes(value)
          )) ||
        searchValueLower.every((value) =>
          link.description.toLowerCase().includes(value)
        )
      ) {
        console.log(`${searchValue} 발견: ${link.description}`);
      }
    });
  };

  return (
    <Layout>
      <div className="FolderPage">
        <div className="FolderPage-items">
          <Link to="/shared">sharedPage 가는 링크</Link>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onEnterPressed={handleSearchFolder}
          />
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
