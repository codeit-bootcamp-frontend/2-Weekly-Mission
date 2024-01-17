// 유저 데이터 타입 선언
export type UserRawData = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type UserData = {
  id: number;
  createdAt: string;
  ownerName: string;
  email: string;
  profileImage: string;
  authId: string;
};
