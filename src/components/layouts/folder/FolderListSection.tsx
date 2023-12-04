import styled from 'styled-components';
import SearchBar from '../../molecules/SearchBar';
import TagBlock from '../../molecules/TagBlock';

const Container = styled.div`
	width: 80%;
	max-width: 1520px;
	margin: 0 auto;
	padding: 4rem 0;
`;

const TagsBar = styled.div``;

const ListsWrapper = styled.div``;

const FolderTitle = styled.div``;

const CardsContainer = styled.div``;

function FolderListSection() {
	return (
		<Container>
			<SearchBar />
			<TagsBar>
				<TagBlock>즐겨찾기</TagBlock>
			</TagsBar>
			<ListsWrapper>
				<FolderTitle></FolderTitle>
				<CardsContainer></CardsContainer>
			</ListsWrapper>
		</Container>
	);
}

export default FolderListSection;
