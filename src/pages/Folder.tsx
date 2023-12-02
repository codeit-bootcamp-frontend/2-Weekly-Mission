import styled from 'styled-components';
import AddLinkSection from '../components/layouts/folder/AddLinkSection';
import FolderListSection from '../components/layouts/folder/FolderListSection';

const Container = styled.div``;

function Folder() {
	return (
		<Container>
			<AddLinkSection />
			<FolderListSection />
		</Container>
	);
}

export default Folder;
