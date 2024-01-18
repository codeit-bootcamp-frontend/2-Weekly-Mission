import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "../../../../contexts/LocaleContext";
import { ModalControl } from "../../../../types/common";

interface CategoryInfo {
  title: string;
  image: string;
}

function Category({ category }: { category: CategoryInfo }) {
  const { title, image } = category;
  const { openModal } = useContext<ModalControl>(ModalContext);

  return (
    <CategoryBox
      onClick={() => {
        openModal(`${title}`);
      }}
    >
      <Image width={18} height={18} src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

export default Category;
