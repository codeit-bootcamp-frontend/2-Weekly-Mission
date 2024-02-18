import { END_POINT } from "@/lib/constents";

export const folderServices = {
  //유저의 전체 폴더 조회
  folder: `${END_POINT}/folders`,
  //유저의 전체 링크 조회
  links: `${END_POINT}/links`,
  //폴더 조회
  selectedFolder: (folderId: string) => `${END_POINT}/folders/${folderId}`,
  selectedLinks: (linkId: string) => `${END_POINT}/links/${linkId}`,
  //폴더에 속한 링크 조회
  getSelectedFolderLinks: (folderId: string) => `${END_POINT}/folders/${folderId}/links`,
};
export const userServices = {
  //프로필 영역 데이터 불러옴.
  users: `${END_POINT}/users`,
  //중복 이메일 확인을 위해 조회.
  checkedEmail: `${END_POINT}/users/check-email`,
};

export const authServices = {
  signIn: `${END_POINT}/auth/sign-in`,
  signUp: `${END_POINT}/auth/sign-up`,
};
