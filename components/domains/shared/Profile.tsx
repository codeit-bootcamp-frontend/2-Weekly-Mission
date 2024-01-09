import Image from "next/image";
import { getSharedFolders } from "@/lib/api";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";

interface Owner {
  profileImageSource: string;
  name: string;
}

interface Folder {
  owner: Owner;
  name: string;
}

interface ProfileInfoProps {
  owner: Owner;
  name: string;
}

function ProfileInfo({ owner, name }: ProfileInfoProps) {
  if (!owner) return <p>로그인 정보가 없습니다.</p>;
  return (
    <div className={styles.profile}>
      <Image src={owner.profileImageSource} width={60} height={60} alt="해당 프로필 이미지" />
      <div className={styles.profileNickName}>{`@${owner.name}`}</div>
      <h2>{name}</h2>
    </div>
  );
}

function Profile() {
  const [folder, setFolder] = useState<Folder | null>(null);

  useEffect(() => {
    const handleFolder = async () => {
      const { folder } = await getSharedFolders();
      setFolder(folder);
    };
    handleFolder();
  }, []);

  return folder && <ProfileInfo owner={folder.owner} name={folder.name} />;
}

export default Profile;
