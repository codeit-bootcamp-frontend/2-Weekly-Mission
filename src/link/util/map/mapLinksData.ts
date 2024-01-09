import { format } from 'date-fns';
import { getElapsedTime } from '../../../commons/util/getElapsedTime';

// 링크 데이터 매칭시키는 함수
export const mapLinksData = (link: {
  id: number;
  createdAt: string;
  imageSource: string;
  url: string;
  title: string;
  description: string;
}) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    title,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt), // 데이터 요구사항 형식대로 반환
    description,
    createdAt: format(new Date(createdAt), 'yyyy. MM. dd'),
  };
};
