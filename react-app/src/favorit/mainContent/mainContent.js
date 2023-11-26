import { CardList } from "./card";
import { useEffect, useState } from "react";
import { getFolderCardData } from "../../api";
import { SearchBar } from "./searchBar";
import "./mainContent.css";

export function MainContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFolderCardData().then((response) => {
      setItems(response);
    });
  }, []);

  const sortedItems = items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  console.log(sortedItems);

  return (
    <main>
      <SearchBar />
      <CardList items={sortedItems} />
    </main>
  );
}
