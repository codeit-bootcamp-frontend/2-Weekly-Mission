import Image from "next/image";
import * as S from "./styled";
import avatar from "@/public/images/Avatar.png";
import { User } from "@/types/user.type";

interface SharedHeaderProps {
  user?: User;
  folderName: string;
}

function SharedHeader({ user, folderName }: SharedHeaderProps) {
  return (
    <S.Wrapper>
      <Image
        src={user?.image_source || avatar}
        style={{
          objectFit: "contain",
        }}
        width={60}
        height={60}
        alt="avatar"
      />
      <S.SharedOwner>{user?.name || "@codeit"}</S.SharedOwner>
      <S.SharedFolder>{folderName || "⭐️ 즐겨찾기"}</S.SharedFolder>
    </S.Wrapper>
  );
}

export default SharedHeader;
