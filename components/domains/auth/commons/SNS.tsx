import React from "react";
import Image from "next/image";
import styles from "./SNS.module.css";

interface SNSProps {
  title: string;
}

export default function SNS({ title }: SNSProps) {
  return (
    <div className={styles.sns}>
      <div className={styles.snsTitle}>{title}</div>
      <button className={styles.snsButton}>
        <a href="https://www.google.com/" target="_blank">
          <Image src="/images/auth/google-background.svg" width={42} height={42} alt="google background" />
          <Image className={styles.snsIcon} src="/images/auth/google.png" width={22} height={22} alt="google" />
        </a>
      </button>
      <button className={styles.snsButton}>
        <a href="https://www.kakaocorp.com/page/" target="_blank">
          <Image src="/images/auth/kakao-background.svg" width={42} height={42} alt="kakao background" />
          <Image className={styles.snsIcon} src="/images/auth/kakao.svg" width={22} height={22} alt="kakao" />
        </a>
      </button>
    </div>
  );
}
