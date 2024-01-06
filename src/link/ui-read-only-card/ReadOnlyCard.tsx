import { CardContent } from '@/src/commons/ui-card-content/CardContent';
import { CardImage } from '@/src/commons/ui-card-image/CardImage';
import { Card } from '@/src/commons/ui-card/Card';
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
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Card>
    </Link>
  );
};
