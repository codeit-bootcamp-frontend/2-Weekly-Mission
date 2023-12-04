import styled from 'styled-components';
import theme from '../../../styles/theme';
import SearchBar from '../../molecules/SearchBar';
import GradationButton from '../../molecules/GradationButton';

const Container = styled.div`
	width: 100%;
	height: 21.9rem;
	background-color: ${({ theme }) => theme.colors.skyblue};
`;

const SearchBarWrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	padding-top: 6rem;
	display: flex;
	align-items: center;
	position: relative;
`;

// DOESN'T WORK
// const StyledSearchBar = styled(SearchBar)`
// 	padding-top: 6rem;
// `;

// DOESN'T WORK
const StyledGradationButton = styled(GradationButton)`
	position: absolute;
	right: 0;
`;

function AddLinkSection() {
	return (
		<Container>
			<SearchBarWrapper>
				<SearchBar
					inputWidth='75%'
					backgroundColor='#fff'
					borderColor={theme.colors.purple}
					placeholder='링크를 추가해 보세요.'
					placeholderColor={theme.colors.gray60}
					iconSrc='/images/link.png'
					iconAlt='link-icon'
				/>
				<StyledGradationButton width='8rem'>추가하기</StyledGradationButton>
			</SearchBarWrapper>
		</Container>
	);
}

export default AddLinkSection;
