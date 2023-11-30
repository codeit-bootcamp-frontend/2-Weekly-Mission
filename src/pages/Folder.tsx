import styled from 'styled-components';
import ProfileSection from '../components/layouts/ProfileSection';
import ListSection from '../components/layouts/ListSection';

const Container = styled.div`
  width: 100%;
`;

function Folder() {
  return (
    <Container>
      <ProfileSection />
      <ListSection />
    </Container>
  );
}

export default Folder;
