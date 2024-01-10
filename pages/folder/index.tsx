import React, { useRef, useEffect, useState } from "react";
import styles from "@/styles/Folder.module.css";
import AddLink from "@/components/domains/folder/AddLink";
import FolderLists from "@/components/domains/folder/FolderLists";
import FolderAddButton from "@/components/domains/folder/FolderAddButton";

function FolderPage() {
  const addLinkRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const addLinkCurrentRef = addLinkRef.current;
    const footerCurrentRef = footerRef.current;
    if (!addLinkCurrentRef || !footerCurrentRef) return;

    let isAddLinkIntersecting = false;
    let isFooterIntersecting = false;

    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === addLinkCurrentRef) {
          isAddLinkIntersecting = entry.isIntersecting;
        } else if (entry.target === footerCurrentRef) {
          isFooterIntersecting = entry.isIntersecting;
        }
      });

      const shouldBeIntersecting =
        (isAddLinkIntersecting && isFooterIntersecting) ||
        isAddLinkIntersecting ||
        (!isAddLinkIntersecting && isFooterIntersecting);
      setIsSticky(shouldBeIntersecting);
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handler, options);

    observer.observe(addLinkCurrentRef);
    observer.observe(footerCurrentRef);

    return () => {
      observer.unobserve(addLinkCurrentRef);
      observer.unobserve(footerCurrentRef);
    };
  }, []);

  return (
    <>
      <AddLink ref={addLinkRef} $isSticky={isSticky} />
      <main>
        <div className={styles.folder}>
          <FolderLists />
          <FolderAddButton />
        </div>
      </main>
      <div ref={footerRef} />
    </>
  );
}

export default FolderPage;
