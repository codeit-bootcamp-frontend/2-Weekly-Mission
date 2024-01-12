import axios from "axios";

const axiosInstance = axios.create();

interface SharedFolderLink {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

interface SharedFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: SharedFolderLink[];
  };
}

const convertToSnakeCase = (data: SharedFolder) => {
  const { links } = data.folder;
  const convertedLinks = links.map((link) => {
    const convertedLink = Object.fromEntries(
      Object.entries(link).map(([key, value]) => [key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`), value])
    );
    return convertedLink;
  });
  return convertedLinks;
};

axiosInstance.interceptors.response.use((response) => {
  if (response.data && response.data.folder) {
    response.data.folder.links = convertToSnakeCase(response.data);
  }
  return response;
});

export default axiosInstance;
