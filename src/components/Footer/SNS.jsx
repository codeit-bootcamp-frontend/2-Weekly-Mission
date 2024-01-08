import React from "react";

function SNS({ imageSrc, alt }) {
  return (
    <div>
      <a
        href={`https://www.${alt}.com/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageSrc} alt={`${alt} 홈페이지로 연결된 로고`} />
      </a>
    </div>
  );
}

export default SNS;
