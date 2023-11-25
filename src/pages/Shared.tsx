import styled from 'styled-components';
import ProfileSection from '../components/ProfileSection';
import ListSection from '../components/ListSection';

const Container = styled.div``;

function Shared() {
	return (
		<Container>
			<ProfileSection />
			<ListSection />
		</Container>
	);
}

export default Shared;
