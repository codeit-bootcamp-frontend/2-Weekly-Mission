import styled from 'styled-components';
import { FolderCardProps } from '../../utils/interfaces';

const Container = styled.div`
	width: 100%;
	box-shadow: 0px 5px 25px 0px #00000014;
	border-radius: 15px;
	cursor: pointer;
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		border-radius: 15px 15px 0 0;
		object-fit: cover;
	}
`;

const BottomWrapper = styled.div`
	width: 100%;
	height: 13.5rem;
	padding: 1.5rem 2rem;
`;

const CreatedBefore = styled.div`
	font-size: 1.3rem;
	color: #666666;
`;

const Description = styled.div`
	font-size: 1.6rem;
	margin: 1rem 0;
	height: 4.9rem;
	line-height: 24px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

const CreatedAtContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CreatedAt = styled.div`
	color: #333;
`;

const KebabButton = styled.div`
	cursor: pointer;
`;

function FolderCard({ link }: FolderCardProps) {
	console.log(link);
	const getCreatedTime = () => {};

	const getCreatedBefore = () => {};

	return (
		<Container onClick={() => window.open(link.url, '_blank')}>
			<ImageWrapper>
				{link.image_source ? (
					<img src={link.image_source} alt='card-img' />
				) : (
					<p>No Image!</p>
				)}
			</ImageWrapper>
			<BottomWrapper>
				<CreatedAtContainer>
					<CreatedBefore>{}</CreatedBefore>
					<KebabButton>
						<img src='images/kebab.png' alt='kebab-icon' />
					</KebabButton>
				</CreatedAtContainer>
				{link.description ? (
					<Description>{link.description}</Description>
				) : (
					<Description>no description!</Description>
				)}
				<CreatedAt>{}</CreatedAt>
			</BottomWrapper>
		</Container>
	);
}

export default FolderCard;
