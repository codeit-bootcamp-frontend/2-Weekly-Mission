import styled from "styled-components";
import Image from "next/image";

interface CategoryInfo {
  title: string;
  image: string;
}

function Category({
  category,
  openModal,
}: {
  category: CategoryInfo;
  openModal: (buttonText: string) => void;
}) {
  const { title, image } = category;

  return (
    <StyledCategory
      onClick={() => {
        openModal(`${title}`);
      }}
    >
      <Image width={10} height={10} src={image} alt={`${title} 아이콘`} />
      <div>{title}</div>
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

export default Category;
