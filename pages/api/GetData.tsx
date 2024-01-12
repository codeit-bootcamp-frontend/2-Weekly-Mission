import axios from "axios";
import API_BASE_URL from "../../constants";

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
      Object.entries(link).map(([key, value]) => [
        key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`),
        value,
      ])
    );
    return convertedLink;
  });
  return convertedLinks;
};

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((response) => {
  if (response.data && response.data.folder) {
    response.data.folder.links = convertToSnakeCase(response.data);
  }
  return response;
});

const getData = async (url: string) => {
  try {
    const response = await axiosInstance.get(`${API_BASE_URL}${url}`);

    if (!(response.status === 200)) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
};

export default getData;
