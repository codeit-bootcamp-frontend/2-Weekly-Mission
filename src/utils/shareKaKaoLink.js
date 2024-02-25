const APP_KEY = process.env.KAKAO_APP_KEY;

export const shareKakaoLink = (url, image) => {
  const kakao = window.Kakao;

  if (!kakao) {
    return;
  }

  if (!kakao.isInitialized()) {
    kakao.init(APP_KEY);
  }

  kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `Linkbrary`,
      description: `세상의 모든 정보를 쉽게 저장하고 관리해 보세요`,
      imageUrl: image,
      link: {
        webUrl: url,
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          webUrl: url,
        },
      },
    ],
  });
};
