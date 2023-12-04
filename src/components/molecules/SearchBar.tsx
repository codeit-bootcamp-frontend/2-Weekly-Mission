import styled from 'styled-components';
import { SearchBarProps } from '../../utils/interfaces';

const Container = styled.div<SearchBarProps>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '5.4rem'};
	border: ${({ borderColor }) => `1px solid ${borderColor}` || 'none'};
	border-radius: 10px;
	background-color: ${({ backgroundColor }) => backgroundColor || '#f5f5f5'};
	position: relative;
	display: flex;
	align-items: center;
	padding: 1.5rem 1.6rem;
`;

const Bar = styled.input<SearchBarProps>`
	width: ${({ inputWidth }) => inputWidth || '100%'};
	background-color: ${({ backgroundColor }) => backgroundColor || '#f5f5f5'};
	border: none;
	outline: none;
	font-size: ${({ fontSize }) => fontSize || '1.6rem'};
	color: ${({ fontColor }) => fontColor};
	margin-left: 2.6rem;

	&::placeholder {
		color: ${({ placeholderColor }) => placeholderColor};
	}
`;

const SearchIcon = styled.div<SearchBarProps>`
	width: ${({ iconWidth }) => iconWidth || '1.6rem'};
	height: ${({ iconHeight }) => iconHeight || '1.6rem'};
	position: absolute;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		text-align: center;
	}
`;

function SearchBar({
	width,
	height,
	backgroundColor,
	borderColor,
	inputWidth,
	fontSize,
	fontColor,
	placeholder,
	placeholderColor,
	iconSrc,
	iconAlt,
	iconWidth,
	iconHeight,
}: SearchBarProps) {
	return (
		<Container
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
		>
			<Bar
				inputWidth={inputWidth}
				backgroundColor={backgroundColor}
				fontSize={fontSize}
				fontColor={fontColor}
				placeholder={placeholder || '링크를 검색해 보세요'}
				placeholderColor={placeholderColor}
			/>
			<SearchIcon iconWidth={iconWidth} iconHeight={iconHeight}>
				<img src={iconSrc || '/images/search-icon.png'} alt={iconAlt || 'search-icon'} />
			</SearchIcon>
		</Container>
	);
}

export default SearchBar;
