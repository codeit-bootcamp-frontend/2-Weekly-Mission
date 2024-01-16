import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AuthLogo.module.css";

interface AuthLogoProps {
  signMessage: string;
  link: string;
  linkTitle: string;
}

export default function AuthLogo({ signMessage, link, linkTitle }: AuthLogoProps) {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image src="/images/auth/linkbrary-logo-sign.svg" width={210} height={38} alt="logo" />
      </Link>
      <div className={styles.sign}>
        <div>{signMessage}</div>
        <Link href={link}>{linkTitle}</Link>
      </div>
    </div>
  );
}
