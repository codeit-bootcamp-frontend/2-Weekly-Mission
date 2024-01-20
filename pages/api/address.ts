import { END_POINT } from "@/lib/constents";

export const folderServices = {
  //유저의 전체 폴더 조회
  getFolder: `${END_POINT}/folders`,
  //유저의 전체 링크 조회
  getLinks: `${END_POINT}/links`,
  //폴더 조회
  getSelectedFolder: (folderId: string) => `${END_POINT}/folders/${folderId}`,
  //선택한 폴더 전체 링크 조회
  getSelectedFolderLinks: (folderId: string) => `${END_POINT}/links?folderId=${folderId}`,
};
export const userServices = {
  //프로필 영역 데이터 불러옴.
  getProfile: `${END_POINT}/users`,
  //로그인 데이터 전송.
  signIn: `${END_POINT}/sign-in`,
  //중복 이메일 확인을 위해 조회.
  checkedEmail: `${END_POINT}/check-email`,
  //로그인 데이터 전송.
  signUp: `${END_POINT}/sign-up`,
};
