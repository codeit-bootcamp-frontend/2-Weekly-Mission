import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../../molecules/SearchBar';
import TagBlock from '../../molecules/TagBlock';
import { Tag } from '../../../utils/interfaces';

const Container = styled.div`
	width: 80%;
	max-width: 1520px;
	margin: 0 auto;
	padding: 4rem 0;
`;

const TagsBar = styled.div`
	margin: 4rem 0 2.4rem;

	& > *:not(:last-child) {
		margin-right: 8px;
	}
`;

const ListsWrapper = styled.div``;

const FolderTitle = styled.div``;

const CardsContainer = styled.div``;

function FolderListSection() {
	const [tagData, setTagData] = useState<Tag[] | null>(null);

	const getFolderData = async () => {
		try {
			const res = await fetch('https://bootcamp-api.codeit.kr/api/users/1/folders');
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getFolderData().then((data) => {
			setTagData(data.data);
		});
	}, []);
	console.log(tagData);

	return (
		<Container>
			<SearchBar />
			<TagsBar>
				<TagBlock>전체</TagBlock>
				{tagData ? (
					tagData.map((data: Tag) => {
						return <TagBlock key={data.id}>{data.name}</TagBlock>;
					})
				) : (
					<p>즐겨찾기 폴더가 존재하지 않습니다.</p>
				)}
			</TagsBar>
			<ListsWrapper>
				<FolderTitle></FolderTitle>
				<CardsContainer></CardsContainer>
			</ListsWrapper>
		</Container>
	);
}

export default FolderListSection;
