import styled from "styled-components";
import Category from "./Category";

const categoryList = [
  { title: "공유", image: "/images/share.png " },
  { title: "이름 변경", image: "/images/pen.png" },
  { title: "삭제", image: "/images/delete.png" },
];

function CategoryList({
  searchKeyword,
  folderName,
}: {
  searchKeyword: string;
  folderName: string | undefined;
}) {
  return (
    <CategoryListBox>
      {searchKeyword === "" ? <h1>{folderName}</h1> : <h1>전체</h1>}
      {folderName !== "전체" ? (
        <Categories>
          {categoryList.map((category) => (
            <Category key={folderName} category={category} />
          ))}
        </Categories>
      ) : null}
    </CategoryListBox>
  );
}

const CategoryListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  width: 106rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1.2rem;
`;

export default CategoryList;
