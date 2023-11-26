import styled from 'styled-components';
import { GradationButtonProps } from '../../utils/interfaces';

const Container = styled.div<GradationButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3.7rem;
	cursor: pointer;
	background-image: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.primary} 0%,
		#6ae3fe 100%
	);
	border-radius: 0.8rem;
	color: #f5f5f5;
	font-size: 1.4rem;
	font-weight: 600;
	width: ${({ width }) => width || 'auto'};
`;

function GradationButton({ width, children }: GradationButtonProps) {
	return <Container width={width}>{children}</Container>;
}

export default GradationButton;
