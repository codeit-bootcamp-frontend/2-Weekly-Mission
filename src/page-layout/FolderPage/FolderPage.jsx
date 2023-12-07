import { Link } from "react-router-dom";
import { Layout } from "feature/Layout";
import "./FolderPage.css";
import { useGetFolder } from "data-access/useGetFolder";
import { CardList } from "../../ui/CardList";
import { ReadOnlyCard } from "../../ui/ReadOnlyCard";
import { SearchBar } from "../../ui/SearchBar";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data || {};

  return (
    <Layout>
      <h1>폴더 페이지</h1>
      <Link to="/">sharedPage 가는 링크</Link>
      <SearchBar />
      <CardList>
        {links?.map((link) => (
          <ReadOnlyCard key={link?.id} {...link} />
        ))}
      </CardList>
    </Layout>
  );
};
