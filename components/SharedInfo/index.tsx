import Image from "next/image";
import * as S from "./styled";
import { SharedData } from "@/types/shared.type";
import avatar from "@/public/images/Avatar.png";

interface SharedInfoProps {
  folder: SharedData;
}

function SharedInfo({ folder }: SharedInfoProps) {
  const { owner, name } = folder;
  return (
    <S.Wrapper>
      <Image
        src={folder?.owner.profileImageSource || avatar}
        style={{
          objectFit: "contain",
        }}
        width={60}
        height={60}
        alt="avatar"
      />
      <S.SharedOwner>{owner.name || "@codeit"}</S.SharedOwner>
      <S.SharedFolder>{name || "⭐️ 즐겨찾기"}</S.SharedFolder>
    </S.Wrapper>
  );
}

export default SharedInfo;
