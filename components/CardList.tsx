import Card from "./Card";
import styled from "styled-components";
import LinkNotFound from "./LinkNotFound";
import { IPFolderData, IPCardData, ITransformCardData } from "../utils/type";

interface Props {
  cardData: ITransformCardData[];
  folderListData?: IPFolderData[];
  linkData?: IPCardData[];
}

export default function CardList({ cardData, folderListData, linkData }: Props) {
  return (
    <>
      {cardData.length === 0 ? (
        <LinkNotFound />
      ) : (
        <StyledCardListContainer>
          {cardData.map((data: ITransformCardData) => (
            <Card key={data.id} data={data} folderListData={folderListData} linkData={linkData} />
          ))}
        </StyledCardListContainer>
      )}
    </>
  );
}

const StyledCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33rem;
  gap: 2rem 2.5rem;
  justify-items: stretch;

  @media all and (min-width: 768px) and (max-width: 1124px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 2.4rem;
    justify-items: stretch;
  }

  @media all and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    justify-items: stretch;
  }
`;
