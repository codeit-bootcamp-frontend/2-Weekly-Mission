import { useEffectOnce } from './useEffectOnce';

// 카카오 공유 파라미터 타입 선언
type ShareKakaoParams = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
};

declare const window: Window & {
  Kakao: {
    init: (key?: string) => void;
    isInitialized: () => boolean;
    Link: {
      sendDefault: (params: {
        objectType: 'feed';
        content: {
          title: string;
          description: string;
          imageUrl: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        };
        buttons: {
          title: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        }[];
      }) => void;
    };
  };
};

// 카카오 공유 sdk 사용하는 커스텀 훅
export const useKakaoSdk = () => {
  const shareKakao = ({
    url,
    title,
    description,
    imageUrl,
  }: ShareKakaoParams) => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      //   카카오 sdk init
      if (!kakao.isInitialized()) {
        // key 보안을 위해 .env 사용
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_SDK_KEY);
      }

      //   보낼 형식(카카오 developers sdk 설명 참조)
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: title,
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  //   js로 sdk 링크 추가
  useEffectOnce(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return { shareKakao };
};
