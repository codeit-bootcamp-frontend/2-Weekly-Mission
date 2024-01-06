import { useEffect, useState } from "react";
import Banner from "../components/domains/shared/Banner";
import CardList from "../components/commons/CardList";
import SearchInput from "../components/commons/SearchInput";
import styles from "../styles/sharedPage.module.css";
import { getSharedData } from "./api/SharedApi";

interface CamelKeyLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
interface LinkInfo {
  id?: number;
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  created_at?: string;
}

interface FolderInfo {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: LinkInfo[];
}

function SharedPage() {
  const [sharedFolder, setSharedFolder] = useState<FolderInfo>({
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
        created_at: "",
      },
    ],
  });

  function transformKeys(link: CamelKeyLink): LinkInfo {
    const transformedLink = Object.fromEntries(
      Object.entries(link).map(([key, value]) => [
        key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`),
        value,
      ])
    ) as LinkInfo;

    return transformedLink;
  }

  const transLinkKey = (links: []) => links.map(transformKeys);

  const handleFolderLoad = async () => {
    const { folder } = await getSharedData();
    const transformedFolder = {
      ...folder,
      links: transLinkKey(folder.links),
    };
    setSharedFolder(transformedFolder);
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
