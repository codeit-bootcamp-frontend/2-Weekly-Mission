import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { CtaLong } from "@/components/commons/Cta";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const onSignup = () => {
    router.push("/auth/signup");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            <span className={`${styles.backgroundClipText} ${styles.titleGradation1}`}>세상의 모든 정보</span>를 <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <CtaLong onClick={onSignup}>링크 추가하기</CtaLong>
          <Image src="/images/home/hero-image.png" width={1150} height={600} alt="hero image" />
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.subTitle}>
            <span className={`${styles.backgroundClipText} ${styles.titleGradation2}`}>원하는 링크</span>를 <br />
            저장하세요
          </h2>
          <p className={styles.description}>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
          </p>
          <Image className={styles.image} src="/images/home/image1.png" width={579} height={469} alt="image 1" />
        </div>

        <div className={styles.content}>
          <Image className={styles.image} src="/images/home/image2.png" width={579} height={469} alt="image 2" />
          <h2 className={styles.subTitle}>
            링크를 폴더로 <br />
            <span className={`${styles.backgroundClipText} ${styles.titleGradation3}`}>관리</span>하세요
          </h2>
          <p className={styles.description}>
            나만의 폴더를 무제한으로 만들고 <br />
            다양하게 활용할 수 있습니다.
          </p>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subTitle}>
            저장한 링크를 <br />
            <span className={`${styles.backgroundClipText} ${styles.titleGradation4}`}>공유</span>해 보세요.
          </h2>
          <p className={styles.description}>
            여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
            공유해 보세요.
          </p>
          <Image className={styles.image} src="/images/home/image3.png" width={579} height={469} alt="image 3" />
        </div>

        <div className={styles.content}>
          <Image className={styles.image} src="/images/home/image4.png" width={579} height={469} alt="image 4" />
          <h2 className={styles.subTitle}>
            저장한 링크를 <br />
            <span className={`${styles.backgroundClipText} ${styles.titleGradation5}`}>검색</span>해 보세요.
          </h2>
          <p className={styles.description}>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
        </div>
      </section>
    </>
  );
}
