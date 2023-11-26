import styled from 'styled-components';
import ProfileSection from '../components/layouts/ProfileSection';
import ListSection from '../components/layouts/ListSection';

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
