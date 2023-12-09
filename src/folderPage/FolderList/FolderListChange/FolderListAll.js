import noImageSource from "../../../img/logo.svg";
import settingImg from "../../../img/kebab.png";
import {
  ATag,
  Img,
  P,
  Lis,
  TextLine,
  CardDescripTag,
  TimeDiff,
  HiddenImg,
  FavoritesImg,
  Flex,
  ButtonImg,
  HhhDiv,
  ToggleOption,
} from "./FolderAllCss";

import starImg from "../../../img/star.png";
import { useState } from "react";

function createdAtBirth(value) {
  const time = new Date(value);
  const yearMonthDay = `${time.getFullYear()}. ${
    time.getMonth() + 1
  }. ${time.getDate()}`;
  return yearMonthDay;
}

function productionDate(value) {
  const currentTime = Date.now();
  const createdAtTime = new Date(value).getTime();
  const timeDiff = currentTime - createdAtTime;
  const minute = timeDiff / 1000 / 60;
  const hour = timeDiff / 1000 / 60 / 60;
  const day = timeDiff / 1000 / 60 / 60 / 24;
  const month = timeDiff / 1000 / 60 / 60 / 24 / 30;
  const year = timeDiff / 1000 / 60 / 60 / 24 / 30 / 12;

  if (year >= 1) {
    return year < 2 ? "1 year ago" : `${Math.floor(year)} years ago`;
  } else if (month >= 1) {
    return month < 2 ? "1 month ago" : `${Math.floor(month)} months ago`;
  } else if (day >= 1) {
    return day < 2 ? "1 day ago" : `${Math.floor(day)} days ago`;
  } else if (hour >= 1) {
    return hour < 2 ? "1 hour ago" : `${Math.floor(hour)} hours ago`;
  } else {
    return minute < 2 ? "1 minute ago" : `${Math.floor(minute)} minutes ago`;
  }
}
function FolderAllList({
  image_source,
  description,
  url,
  created_at,
  folder_id,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked); // 클릭 상태를 토글
  };
  return (
    <Lis key={folder_id}>
      <HiddenImg>
        <ATag href={url} target="_blank">
          {image_source ? (
            <Img src={image_source} alt="cardNews" />
          ) : (
            <Img src={noImageSource} alt="noCardNews" />
          )}
        </ATag>
        <ButtonImg>
          <FavoritesImg src={starImg} />
        </ButtonImg>
      </HiddenImg>

      <TextLine>
        <Flex>
          <TimeDiff>{productionDate(created_at)}</TimeDiff>
          <ButtonImg onClick={handleButtonClick}>
            <img src={settingImg} alt="추가삭제세팅" />
          </ButtonImg>
          {isClicked && (
            <HhhDiv>
              <ToggleOption>삭제하기</ToggleOption>
              <ToggleOption>폴더에 추가</ToggleOption>
            </HhhDiv>
          )}
        </Flex>
        <CardDescripTag>{description}</CardDescripTag>
        <P>{createdAtBirth(created_at)}</P>
      </TextLine>
    </Lis>
  );
}

export default FolderAllList;
