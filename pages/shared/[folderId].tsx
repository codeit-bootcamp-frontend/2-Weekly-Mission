import { Layout } from "@/src/sharing/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/ui-card-list";
import { FolderInfo } from "@/src/folder/ui-folder-info";
import { ReadOnlyCard } from "@/src/link/ui-read-only-card";
import { SearchBar } from "@/src/link/ui-search-bar";
import { useSearchLink } from "@/src/link/util-search-link/useSearchLink";
import { GetServerSideProps } from "next";
import { axiosInstance } from "@/src/sharing/util";
import { mapLinksData } from "@/src/link/util-map";
import { LinkRawData } from "@/src/link/type";
import { Folder } from "@/src/folder/type";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const folderId = context.query["folderId"];
  let userId;
  let folder;
  let owner;
  let links;

  try {
    const folderRes = await axiosInstance.get(`folders/${folderId}`);
    folder = folderRes?.data?.data[0];
    userId = folder["user_id"];
    const ownerRes = await axiosInstance.get(`users/${userId}`);
    owner = ownerRes?.data?.data[0];

    const linksRes = await axiosInstance.get(`users/${userId}/links`);
    links = linksRes?.data?.data;
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      folder,
      owner,
      links,
    },
  };
};

interface Props {
  folder: Folder;
  links: LinkRawData[];
  owner: {
    auth_id: string;
    created_at: string;
    email: string;
    id: number;
    image_source: string;
    name: string;
  };
}

const SharedPage = ({ folder, owner, links }: Props) => {
  console.log("folder", folder);
  console.log("owner", owner);

  const { name: folderName } = folder;
  const { name: ownerName, image_source: profileImage } = owner;
  const { searchValue, handleChange, handleCloseClick, result } = useSearchLink(
    links?.map(mapLinksData) ?? []
  );

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
