import { useEffect, useState } from "react";
import Banner from "../components/domains/shared/Banner";
import CardList from "../components/commons/CardList";
import SearchInput from "../components/commons/SearchInput";
import styles from "../styles/sharedPage.module.css";
import { getSharedData } from "./api/SharedApi";
import { Folder } from "../types/shared";

function SharedPage() {
  const [sharedFolder, setSharedFolder] = useState<Folder>({
    id: 1,
    name: "",
    owner: {
      id: 2,
      name: "",
      profileImageSource: "",
    },
    links: [
      {
        id: 1,
        url: "",
        title: "",
        description: "",
        image_source: "",
        create_at: "",
      },
    ],
  });

  const handleFolderLoad = async () => {
    const { folder } = await getSharedData();
    setSharedFolder({
      ...folder,
      links: folder.links,
    });
  };

  useEffect(() => {
    handleFolderLoad();
  });

  return (
    <>
      <Banner folder={sharedFolder} />
      <section className={styles.contentFlax}>
        <div className={styles.contentBox}>
          <SearchInput />
          <CardList links={sharedFolder?.links} />;
        </div>
      </section>
    </>
  );
}

export default SharedPage;
