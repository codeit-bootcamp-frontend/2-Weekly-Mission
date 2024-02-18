import { useState } from "react";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/contexts/ModalContext";
import { Links } from "@/types/global.type";
import getDateAgo from "@/lib/utills/getDateAgo";
import { putLink } from "@/lib/apis";
import { QUERY_KEYS } from "@/lib/queryKeys";
import Popover from "@/components/common/Popover";
import * as S from "./styled";
import { KebobIcon } from "@/public/icons/folderItem";

interface CardItemProps {
  data: Links;
}

function Item({ data }: CardItemProps) {
  const { favorite, id, created_at, url, description, image_source } = data;
  const [isFavorite, setIsFavorite] = useState(favorite);
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const timeAgo = getDateAgo(created_at);
  const date = new Date(created_at).toLocaleDateString();

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

  const { mutate } = useMutation({
    mutationFn: putLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.folder });
    },
  });

  const toggleFav = () => {
    const favorite = !isFavorite;
    setIsFavorite(favorite);
    mutate({ id: String(id), favorite });
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <Link href={url} target="_blank">
          <S.Image $imageSource={image_source} />
        </Link>
        <S.SIcon $isFavorite={isFavorite} onClick={toggleFav} />
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
