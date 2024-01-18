import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import * as S from "./styled";

import kakao from "@/public/icons/modal/kakao.png";
import facebook from "@/public/icons/modal/facebook.png";
import copyLink from "@/public/icons/modal/copyLink.png";
import Head from "next/head";
import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

function Share() {
  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const shareToKaKao = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("Kakao SDK not initialized");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkabrary",
        description: "세상의 모든 링크를 저장하세요.",
        imageUrl: "",
        link: {
          mobileWebUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "보러 가기",
          link: {
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => alert("링크가 복사되었습니다."));
  };

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossOrigin="anonymous"
        onLoad={() => {
          if (window.Kakao && !window.Kakao.isInitialized()) {
            0;
            window.Kakao.init(process.env.NEXT_PUBLIC_ACCESS_KEY);
          }
        }}
      ></Script>
      <S.TitleWrapper>
        <S.Title>폴더 공유</S.Title>
        <S.SubTitle>폴더 명</S.SubTitle>
      </S.TitleWrapper>
      <LinkWrapper>
        <LinkItem>
          <Image src={kakao} alt="kakao" onClick={shareToKaKao} />
          <span>카카오톡</span>
        </LinkItem>
        <LinkItem>
          <Image src={facebook} alt="facebook" onClick={shareToFacebook} />
          <span>페이스북</span>
        </LinkItem>
        <LinkItem onClick={copyLinkToClipboard}>
          <Image src={copyLink} alt="copyLink" />
          <span>링크복사</span>
        </LinkItem>
      </LinkWrapper>
    </>
  );
}

export default Share;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > span {
    color: var(--Linkbrary-gray100, #373740);
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 115.385% */
  }
`;
