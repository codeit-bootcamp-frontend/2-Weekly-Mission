import styled from 'styled-components';
import { TagBlockProps } from '../../utils/interfaces';

const Container = styled.div`
	display: inline-block;
	cursor: pointer;
	padding: 8px 12px;
	border: 1px solid ${({ theme }) => theme.colors.purple};
	border-radius: 5px;
`;

function TagBlock({ children }: TagBlockProps) {
	return <Container>{children}</Container>;
}

export default TagBlock;
