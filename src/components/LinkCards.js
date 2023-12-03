import sampleImg from "../images/sample-card-image.png";

/* 이 컴포넌트에서 가져와야 하는 데이터:
1. createdAt
2. description
3. title */

// 몇 분 전인지 구하는 함수 -> 좀 이상하게 작동하는 것들 있음
/* 1. 필요한 정보:
  현재 시간: Date 사용해서 변수에 담기 (now)
  createdAt 데이터: links 배열을 파라미터로 받기 

2. now - linkAdded의 결과에 따라 다른 값 리턴 (switch 문?)
  ~ 59분: minute 단위
  1 ~ 23시간: hour 단위 (hour, hours 구분)
  1일 ~ 30일: day 단위
  31일 ~ 11달: month 단위
  12달 이상: year 단위 (/12 소수점 버린 정수) */

function getTimePassed(createdAt) {
  const now = new Date();
  const createdTime = new Date(createdAt);
  const timePassed = now.getTime() - createdTime.getTime();

  const minutesPassed = Math.floor(timePassed / 1000 / 60);
  const hoursPassed = Math.floor(timePassed / 1000 / 60 / 60);
  const dayPassed = Math.floor(timePassed / 1000 / 60 / 60 / 24);
  const monthPassed = Math.floor(timePassed / 1000 / 60 / 60 / 24 / 30);
  const yearPassed = Math.floor(timePassed / 1000 / 60 / 60 / 24 / 30 / 12);

  /*   console.log("timePassed", timePassed);
  console.log("minutesPassed", minutesPassed);
  console.log("hoursPassed", hoursPassed);
  console.log("datePassed", timePassed);
  console.log("monthPassed", monthPassed);
  console.log("yearPassed", yearPassed); */

  // 가독성 괜찮은지..
  if (minutesPassed <= 59) {
    return minutesPassed < 2 ? `1 minute ago` : `${minutesPassed} minutes ago`;
  } else if (hoursPassed <= 23) {
    return hoursPassed < 2 ? `1 hour ago` : `${hoursPassed} hours ago`;
  } else if (dayPassed <= 30) {
    return dayPassed < 2 ? `1 day ago` : `${dayPassed} days ago`;
  } else if (monthPassed <= 11) {
    return monthPassed < 2 ? `1 month ago` : `${monthPassed} months ago`;
  } else {
    return yearPassed < 2 ? `1 hour ago` : `${yearPassed} years ago`;
  }
}

console.log(getTimePassed("2023-03-12T14:24:08Z"));

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// folder 내 link 배열의 각 요소
// TODO 파라미터 destructuring 문법으로 바꾸고 싶은디..
function LinkCard({ link }) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <img src={sampleImg} alt={link.title} />
      <div>
        <p>{getTimePassed(link.createdAt)}</p>
        <p>{link.description}</p>
        <p>{formatDate(link.createdAt)}</p>
      </div>
    </a>
  );
}

// folder 내 link 배열
function LinkCards({ links }) {
  return (
    <div>
      {links.map((link) => {
        return (
          <>
            <LinkCard link={link} />
          </>
        );
      })}
      s
    </div>
  );
}

export default LinkCards;
