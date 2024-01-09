import { useState } from "react";
import styles from "./ShareButtons.module.css";
import Link from "next/link";
import Image from "next/image";

interface ShareButtonsProps {
  folderId?: number;
}

function ShareButtons({ folderId }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLink = `${window.location.origin}/shared?user=1&folder=${folderId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };

  const resetCopiedStatus = () => {
    setCopied(false);
  };

  return (
    <div className={styles.modalShareSNS}>
      <Link
        className={styles.shareSNS}
        href={`https://www.kakaotalk.com/sharer/kakao?u=${encodeURIComponent(shareLink)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/images/modal/Kakao-share.png" width={40} height={40} alt="kakao share" />
        카카오톡
      </Link>
      <Link
        className={styles.shareSNS}
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/images/modal/Facebook-share.png" width={40} height={40} alt="facebook share" />
        페이스북
      </Link>
      <button className={styles.shareLinkButton} onClick={copyToClipboard} onMouseLeave={resetCopiedStatus}>
        <Image src="/images/modal/link-share.png" width={40} height={40} alt="linkshare" />
        {copied ? "복사 완료!" : "링크 복사"}
      </button>
    </div>
  );
}

export default ShareButtons;
