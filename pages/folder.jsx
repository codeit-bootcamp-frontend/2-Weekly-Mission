import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Input } from "../components/Input/EmailInput";
// const cx = classNames.bind(styles);
export default function Folder() {
  return (
    <>
      <Nav />
      <Header />
      <SearchBar />
      <Input />
    </>
  );
}
