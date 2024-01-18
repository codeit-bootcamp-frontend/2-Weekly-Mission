export function formatData({
  id = "",
  name = "",
  created_at = "",
  updated_at = "",
  url = "",
  title = "",
  description = "",
  image_source = "",
  folder_id = "",
  auth_id = "",
}) {
  const data = {
    id,
    name,
    createdAt: created_at,
    updatedAt: updated_at,
    url,
    title,
    description,
    imageSource: image_source,
    folderId: folder_id,
    authId: auth_id,
  };

  return data;
}
