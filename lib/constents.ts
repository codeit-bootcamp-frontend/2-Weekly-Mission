export const END_POINT = "https://bootcamp-api.codeit.kr/api";

export const FOLDER_OPTION_NAME: Record<string, string> = {
  edit: "이름 변경",
  share: "공유",
  delete: "삭제",
};

export const MODAL_TYPE: Record<string, string> = {
  edit: "edit",
  addtoFolder: "addtoFolder",
  share: "share",
  delete: "delete",
  deleteLink: "deleteLink",
  add: "add",
};

export const API_PATH = {
  GET_USER: "/api/users",
  GET_FOLDER: "/api/folder",
  GET_LINKS: "/api/links",
  GET_SELECTED_FOLDER_LINKS: (id: string) => `/api/links/${id}`,
};
