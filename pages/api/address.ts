import { END_POINT } from "@/lib/constents";

export const sharedServices = {
  //shared 페이지 내부 데이터 불러옴.
  getShareds: `${END_POINT}/sample/folder`,
};

export const folderServices = {
  //유저가 가지고 있는 모든 폴더 읽기
  getAllFolder: (userId: string) => `${END_POINT}/users/${userId}/folders`,
  //유저가 가지고 있는 특정 폴더 읽기
  getSelectedFolder: (userId: string, folderId: string) => `${END_POINT}/users/${userId}/folders/${folderId}`,
  //유저가 가지고 있는 링크 읽기
  getUserLinks: (userId: string, folderId?: string) => {
    let url = `${END_POINT}/users/${userId}/links`;
    if (folderId !== undefined) {
      url += `?folderId=${encodeURIComponent(folderId)}`;
    }
    return url;
  },
};
export const userServices = {
  //프로필 영역 데이터 불러옴.
  getProfile: `${END_POINT}/api/sample/user`,
  //유저의 정보 읽기
  getUserProfile: (userid: string) => `${END_POINT}/users/${userid}`,
  //로그인 데이터 전송.
  signIn: `${END_POINT}/sign-in`,
  //중복 이메일 확인을 위해 조회.
  checkedEmail: `${END_POINT}/check-email`,
  //로그인 데이터 전송.
  signUp: `${END_POINT}/sign-up`,
};
