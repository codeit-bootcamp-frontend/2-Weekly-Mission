import React, { useEffect, useRef, useState } from "react";
import { FolderData } from "@/types/contents.type";
import WithFolderHeader from "./Header";
import FolderHeader from "./Section/Header";
import Content from "@/components/Contents";
import * as S from "./styled";
import { Links } from "@/types/global.type";

interface FolderLayoutProps {
  isLoading: boolean;
  links: Links[];
  folder: FolderData[];
  selected: string;
  onClick: (name: string, linksId?: number) => void;
}

export function FolderLayout({ isLoading, links, folder, selected, onClick }: FolderLayoutProps) {
  const [isInterSecting, setIsIntersecting] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const pageEndRef = useRef<HTMLDivElement>(null);

  console.log(links);

  useEffect(() => {
    const target = ref.current;
    const endTarget = pageEndRef.current;
    if (!target || !endTarget) return;

    let isTargetIntersecting = false;
    let isEndTargetIntersecting = false;

    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === target) {
          isTargetIntersecting = entry.isIntersecting;
        } else if (entry.target === endTarget) {
          isEndTargetIntersecting = entry.isIntersecting;
        }
      });

      const shouldBeIntersecting =
        (isTargetIntersecting && isEndTargetIntersecting) ||
        isTargetIntersecting ||
        (!isTargetIntersecting && isEndTargetIntersecting);
      setIsIntersecting(shouldBeIntersecting);
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handler, options);

    observer.observe(target);
    observer.observe(endTarget);

    return () => {
      observer.unobserve(target);
      observer.unobserve(endTarget);
    };
  }, []);

  return (
    <>
      <WithFolderHeader ref={ref} isInterSecting={isInterSecting} />
      <S.Article>
        <Content isLoading={isLoading} links={links}>
          <FolderHeader tags={folder} selected={selected} onClick={onClick} />
        </Content>
      </S.Article>
      <div ref={pageEndRef} />
    </>
  );
}
