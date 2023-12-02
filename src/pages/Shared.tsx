import styled from 'styled-components';
import ProfileSection from '../components/layouts/shared/ProfileSection';
import SharedListSection from '../components/layouts/shared/SharedListSection';

const Container = styled.div`
	width: 100%;
`;

function Shared() {
	return (
		<Container>
			<ProfileSection />
			<SharedListSection />
		</Container>
	);
}

export default Shared;
