import { Options } from "../Options/Options";
import "./CardTabTitleOptions.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export function CardTabTitleOptions({ links }) {
  const [tabList, setTabList] = useState([]);
  const [clickTabId, setClickTabId] = useState(0);
  const [clickTabAll, setClickTabAll] = useState(true);
  const [tabName, setTabName] = useState("전체");

  // tab목록 가져오기
  async function fetchTabList() {
    try {
      const response = await axios.get(`${BASE_URL}/users/1/folders`);
      const { data } = response;
      setTabList(data.data);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchTabList();
  }, []);

  // 탭들을 클릭시 작동 핸들러
  const handleSelectTab = (e) => {
    setClickTabAll(false);
    setClickTabId(e.target.id);

    const getTab = tabList.filter((tab) => tab.id == e.target.id);

    setTabName(getTab[0].name);
  };

  // 전체 탭을 클릭시 작동 핸들러
  const handleSelectTabAll = () => {
    setClickTabAll(true);
    setClickTabId(0);
    setTabName("전체");
  };

  // // 클릭한 탭의 name을 title로 가져오기
  // const selectTabTitle = () => {

  // }

  return (
    <>
      <div className="CardTabArr">
        <li
          key="all"
          id="all"
          className={clickTabAll ? "tab focused" : "tab"}
          onClick={handleSelectTabAll}
        >
          전체
        </li>
        {tabList.map((tab) => (
          <li
            key={tab.id}
            id={tab.id}
            className={tab.id === Number(clickTabId) ? "tab focused" : "tab"}
            onClick={handleSelectTab}
          >
            {tab.name}
          </li>
        ))}
      </div>
      <div className="titleOptions">
        <h2 className="title">{tabName}</h2>
        <Options />
      </div>
    </>
  );
}

// 보관

// import { Options } from "../Options/Options";
// import "./CardTabTitleOptions.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://bootcamp-api.codeit.kr/api";

// export function CardTabTitleOptions() {
//   const [tabList, setTabList] = useState([]);
//   const [clickTabId, setClickTabId] = useState(0);

//   // tab목록 가져오기
//   async function fetchTabList() {
//     try {
//       const response = await axios.get(`${BASE_URL}/users/1/folders`);
//       const { data } = response;
//       setTabList(data.data);
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   useEffect(() => {
//     fetchTabList();
//   }, []);

//   const handleSelectTab = (e) => {
//     setClickTabId(e.target.id);
//   };

//   return (
//     <>
//       <div className="CardTabArr">
//         {tabList.map((tab) => (
//           <li
//             key={tab.id}
//             id={tab.id}
//             className={tab.id === Number(clickTabId) ? "tab focused" : "tab"}
//             onClick={handleSelectTab}
//           >
//             {tab.name}
//           </li>
//         ))}
//       </div>
//       <div className="titleOptions">
//         <h2 className="title">유</h2>
//         <Options />
//       </div>
//     </>
//   );
// }
