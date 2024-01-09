import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Gnb.module.css";
import { getProfiles } from "@/lib/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { CtaShort } from "./Cta";

interface Profile {
  id: number;
  email: string;
  image_source: string;
}

function Gnb() {
  const [userData, setUserData] = useState<Profile[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getProfiles();
      setUserData(data.data);
    };
    fetchUserData();
  }, []);

  const onLogin = () => {
    // setUserData((prev) => !prev);
    router.push("/auth/signin");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image src="/images/home/linkbrary-logo.png" width={133} height={24} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        {userData ? (
          <>
            {userData.map((info) => {
              return (
                <div className={styles.gnb} key={info.id}>
                  <Image className={styles.gnbImg} src={info.image_source} width={28} height={28} alt="프로필 사진" />
                  <div className={styles.email}>{info.email}</div>
                </div>
              );
            })}
          </>
        ) : (
          <CtaShort onClick={onLogin}>로그인</CtaShort>
        )}
      </div>
    </nav>
  );
}

export default Gnb;
