import React, { useEffect, useRef, useState } from "react";
import { FolderLinks } from "@/types/folder.type";
import WithFolderHeader from "./Header";
import FolderHeader from "./Section/Header";
import Content from "@/components/Contents";

interface FolderLayoutProps {
  links: FolderLinks[];
  folderData: any;
  selected: string;
  onClick: (name: string, linksId?: number) => void;
}

export function FolderLayout({ links, folderData, selected, onClick }: FolderLayoutProps) {
  const [isInterSecting, setIsIntersecting] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const pageEndRef = useRef<HTMLDivElement>(null);

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
      <Content links={links}>
        <FolderHeader data={folderData} selected={selected} onClick={onClick} />
      </Content>
      <div ref={pageEndRef} />
    </>
  );
}
