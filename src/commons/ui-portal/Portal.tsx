import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
  container?: Element | DocumentFragment | null;
};

// useLayoutEffect : dom을 조작할 때 깜빡임을 없애기 위해 사용한 것으로 보임
// createPortal : 일부 자식들을 DOM의 다른 부분으로 렌더링. 즉 모달용으로 사용한 것으로 보임.

export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | DocumentFragment | null>(
    null
  );

  useEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
