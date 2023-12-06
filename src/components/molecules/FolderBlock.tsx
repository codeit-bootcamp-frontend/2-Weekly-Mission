import styled from 'styled-components';
import { FolderBlockProps } from '../../utils/interfaces';

const Container = styled.div`
	display: inline-block;
	cursor: pointer;
	padding: 8px 12px;
	border: 1px solid ${({ theme }) => theme.colors.purple};
	border-radius: 5px;
`;

function FolderBlock({ children }: FolderBlockProps) {
	return <Container>{children}</Container>;
}

export default FolderBlock;
