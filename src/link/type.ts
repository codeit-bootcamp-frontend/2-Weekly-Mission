// 링크와 관련된 타입들

// 샘플 링크 데이터 타입
export type SampleLinkRawData = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

// 링크 미가공 데이터 타입 선언
export type LinkRawData = {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  image_source: string;
  title: string;
  description: string;
  folder_id: number;
};

// 링크 데이터 타입 선언
export type Link = {
  id: number;
  title: string;
  url: string;
  imageSource: string;
  alt: string;
  description: string;
  elapsedTime: string;
  createdAt: string;
};
