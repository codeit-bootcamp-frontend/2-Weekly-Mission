import styled from "styled-components";

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
      <img src={image} alt={`${title} 아이콘`} />
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
