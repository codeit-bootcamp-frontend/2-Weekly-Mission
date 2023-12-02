import { useState } from "react";
import "./CardTab.css";

export const CardTab = () => {
  const [clickTab, setClickTab] = useState(0);

  const tabArr = [
    { subject: "전체", query: "users/1/links?folderId=211" },
    { subject: "⭐ 즐겨찾기", query: "users/1/links?folderId=208" },
    { subject: "코딩 팁", query: "users/1/links?folderId=46" },
    { subject: "채용 사이트", query: "users/1/links?folderId=44" },
    { subject: "유용한 글", query: "users/1/links?folderId=42" },
    { subject: "나만의 장소", query: "users/1/links?folderId=45" },
  ];

  const handleSelectTab = (index) => {
    setClickTab(index);
  };

  return (
    <div className="CardTabArr">
      {tabArr.map((el, index) => (
        <li
          key={index}
          className={index === clickTab ? "tab focused" : "tab"}
          onClick={() => handleSelectTab(index)}
        >
          {el.subject}
        </li>
      ))}
    </div>
  );
};
