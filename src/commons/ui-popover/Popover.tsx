import {
  CSSProperties,
  MutableRefObject,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import styles from './Popover.module.scss';
import classNames from 'classnames/bind';
import { useBackgroundClick } from '../util/useBackgroundClick';
import { Portal } from '../ui-portal/Portal';

const cx = classNames.bind(styles);

// 카드 팝오버 프롭 타입 선언
type PopoverProps = {
  children: ReactNode;
  isOpen: boolean;
  anchorRef?: MutableRefObject<Element | null>;
  anchorPosition?: {
    top?: CSSProperties['top'];
    right?: CSSProperties['right'];
    bottom?: CSSProperties['bottom'];
    left?: CSSProperties['left'];
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
};

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null); // 팝오버 기준

  //   팦오버 기준으로 위치 지정값
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? 'unset',
      right: anchorPosition?.right ?? 'unset',
      bottom: anchorPosition?.bottom ?? 'unset',
      left: anchorPosition?.left ?? 'unset',
    };
  }, [anchorPosition]);

  //   배경화면 클릭 이벤트 콜백
  const handleBackgroundClick = useCallback<(e: MouseEvent) => void>(
    ({ target }) => {
      const isPopover = popoverRef.current?.contains(target as Node);
      const isAnchor = anchorRef?.current?.contains(target as Node);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );

  useBackgroundClick(handleBackgroundClick);

  //   닫혀있으면 보이지 않음
  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef?.current}>
      <div
        className={cx('popover')}
        ref={popoverRef}
        style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
