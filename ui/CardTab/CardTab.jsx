import { useEffect, useState } from "react";
import "./CardTab.css";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const CardTab = ({ tabList }) => {
  const [clickTab, setClickTab] = useState(0);

  const handleSelectTab = (e) => {
    setClickTab(e.target.id);
  };

  return (
    <div className="CardTabArr">
      {tabList.map((tab) => (
        <li
          key={tab.id}
          id={tab.id}
          className={tab.id === Number(clickTab) ? "tab focused" : "tab"}
          onClick={handleSelectTab}
        >
          {tab.name}
        </li>
      ))}
    </div>
  );
};
