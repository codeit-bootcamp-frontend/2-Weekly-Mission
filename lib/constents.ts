export const END_POINT = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";

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
  USER: "/api/users",
  FOLDER: "/api/folder",
  SELECTED_FOLDER: (id: string) => `/api/folder/${id}`,
  LINKS: "/api/links",
  SELECTED_FOLDER_LINKS: (id: string) => `/api/links/${id}`,
  POST_AUTH: (type: string) => `/api/auth/${type}`,
  POST_CHECKEMAIL: "/api/users/checkEmail",
};
