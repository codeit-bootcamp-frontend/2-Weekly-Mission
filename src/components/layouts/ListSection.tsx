import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';
import { Folder } from '../../utils/interfaces';

const Container = styled.div`
	width: fit-content;
	margin: 0 auto;
`;

const SearchBar = styled.div``;

const CardContainer = styled.div``;

function ListSection() {
	const [folder, setFolder] = useState<Folder | null>(null);

	const getFolderData = async () => {
		try {
			const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	getFolderData();

	useEffect(() => {
		getFolderData().then((data) => {
			setFolder(data.folder);
		});
	}, []);
	// console.log(folder);

	const links = folder?.links;
	// console.log(links);

	return (
		<Container>
			<SearchBar />
			{links?.map((link) => (
				<CardContainer key={link.id}>
					<Card link={link} />
				</CardContainer>
			))}
		</Container>
	);
}

export default ListSection;
