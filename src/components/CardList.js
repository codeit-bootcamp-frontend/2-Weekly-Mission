import { useEffect, useState } from "react";
import { getFolderData } from "../Api/Api";

function Card() {
  return;
}

export function CardList() {
  const [folderData, setFolderData] = useState(null);
  useEffect(getFolderData(setFolderData), []);

  return (
    <ul>
      {folderData.links.map((link) => {
        <li>
          <Card link={link} />
        </li>;
      })}
    </ul>
  );
}
