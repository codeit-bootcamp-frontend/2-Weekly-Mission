import React, { useState, useCallback, useEffect } from "react";
import styles from "./Kebab.module.css";
import Image from "next/image";

function Kebab() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={styles.kebab}
      onClick={(e) => {
        e.preventDefault();
        handleButton(e);
      }}
    >
      <Image src="/images/folder/kebab.png" width={21} height={17} alt="kebab icon" />
      {isOpen && (
        <ul
          className={styles.popup}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <li className={styles.kebobList} key="delete">
            삭제하기
          </li>
          <li className={styles.kebobList} key="add">
            폴더에 추가
          </li>
        </ul>
      )}
    </div>
  );
}

export default Kebab;
