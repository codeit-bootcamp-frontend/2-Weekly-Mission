import Link from "next/link";
import { useModal } from "@/contexts/ModalContext";
import getDateAgo from "@/lib/utills/getDateAgo";
import * as S from "./styled";
import { KebobIcon, StarIcon } from "@/public/icons/folderItem";
import Popover from "@/components/common/Popover";

interface CardItemProps {
  data: {
    id: number;
    createdAt: string;
    url: string;
    description: string;
    imageSource: string;
  };
}

function Item({ data: { id, createdAt, url, description, imageSource } }: CardItemProps) {
  const { openModal } = useModal();

  const timeAgo = getDateAgo(createdAt);
  const date = new Date(createdAt).toLocaleDateString();

  const popoverContent = [
    {
      title: "삭제하기",
      onClick: () => openModal({ currentType: "deleteLink", linkId: id, url }),
    },
    {
      title: "폴더에 추가",
      onClick: () => openModal({ currentType: "addtoFolder", url }),
    },
  ];

  return (
    <S.Container>
      <S.ImageContainer>
        <Link href={url} target="_blank">
          <S.Image $imageSource={imageSource} />
        </Link>
        <StarIcon />
      </S.ImageContainer>
      <S.Flavor>
        <S.FlaverHeader>
          <S.Posted>{timeAgo}</S.Posted>
          <Popover content={popoverContent}>
            <KebobIcon />
          </Popover>
        </S.FlaverHeader>
        <S.Description>{description}</S.Description>
        <S.CreateAt>{date}</S.CreateAt>
      </S.Flavor>
    </S.Container>
  );
}

export default Item;
