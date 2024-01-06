import {
  CSSProperties,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';
import styles from './EditableCard.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Card } from '@/src/commons/ui-card/Card';
import { CardImage } from '@/src/commons/ui-card-image/CardImage';
import { CardContent } from '@/src/commons/ui-card-content/CardContent';
import { Popover } from '@/src/commons/ui-popover/Popover';

const cx = classNames.bind(styles);

// 카드 컴포넌트(수정 가능한) 프롭 타입 선언
type EditableCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  popoverPosition: {
    top?: CSSProperties['top'];
    right?: CSSProperties['right'];
    bottom?: CSSProperties['bottom'];
    left?: CSSProperties['left'];
  };
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
};

// folder 페이지에서 보여주는 별 및 팝오버가 있는 카드
export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardProps) => {
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버링 여부
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // 모달 열림 여부
  const kebabButtonRef = useRef(null); // 케밥 버튼

  // 마우스 호버링 이벤트 콜백
  const handleMouseOver = () => setIsHovered(true);

  // 마우스 커서 아웃 이벤트 콜백
  const handleMouseLeave = () => setIsHovered(false);

  //   케밥 버튼 클릭 이벤트
  const handleKebabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsPopoverOpen(true);
  };

  //   배경 클릭 이벤트(케밥이나 팝오버 외부) 콜백
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);

  //   팝오버 - 링크 삭제하기 버튼 클릭 이벤트 콜백
  const handleDeleteClick: MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };

  //   팝오버 - 폴더에 추가하기 버튼 클릭 이벤트 콜백
  const handleAddToFolderClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

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
        <button
          className={cx('star')}
          onClick={(event) => event.preventDefault()}>
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button
          ref={kebabButtonRef}
          className={cx('kebab')}
          onClick={handleKebabClick}>
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}>
          <ul className={cx('popover-list')}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </Link>
  );
};
