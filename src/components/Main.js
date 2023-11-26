import { CardList } from "./CardList.js";
import { Hero } from "./Hero.js";
import { SearchBar } from "./SearchBar.js";

export function Main() {
  return (
    <>
      <Hero />
      <SearchBar />
      <CardList />
    </>
  );
}
