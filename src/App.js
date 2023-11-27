import { useEffect, useState } from "react";
import { getLinksData } from "./components/api";
import { LinkList } from "./components/LinkList";
import "./App.css";

export function App() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const result = await getLinksData();
    const { links } = result;
    setItems(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="body">
      <LinkList items={items} />
    </div>
  );
}
