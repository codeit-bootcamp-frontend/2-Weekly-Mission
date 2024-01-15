import { IPCardData, ISharedPageCardData } from "./type";

export function transformFolderCardData(data: IPCardData[]) {
  return data.map((data) => ({
    id: data.id,
    createdAt: data.created_at,
    url: data.url,
    title: data.title,
    description: data.description,
    img: data.image_source,
    folderId: data.folder_id,
  }));
}

export function transformShareCardData(data: ISharedPageCardData[]) {
  return data.map((data) => ({
    id: data.id,
    createdAt: data.createdAt,
    url: data.url,
    title: data.title,
    description: data.description,
    img: data.imageSource,
  }));
}
