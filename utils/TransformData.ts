export function transformLinkData(data: any) {
  return data.map((data: any) => ({
    id: data.id,
    createdAt: data.created_at,
    url: data.url,
    title: data.title,
    description: data.description,
    img: data.image_source,
    folderId: data.folder_id,
  }));
}

export function transformShareCardData(data: any) {
  return data.map((data: any) => ({
    id: data.id,
    createdAt: data.createdAt || data.created_at,
    url: data.url,
    title: data.title,
    description: data.description,
    img: data.imageSource,
  }));
}
