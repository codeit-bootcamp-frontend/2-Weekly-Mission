import Link from 'next/link';
import { useState } from 'react';

// 읽기 전용 카드 프롭 타입 선언
type ReadOnlyCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
};

// readOnly를 따로 둔 이유는 모르겠으나 나중에 수정이 있을 것 같음(?)
export const ReadOnlyCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadOnlyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {
        // 카드
        // 카드 이미지
        // 카드 컨텐츠
      }
    </Link>
  );
};
