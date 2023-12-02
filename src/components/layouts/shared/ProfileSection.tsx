import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { User } from '../../../utils/interfaces';

const Container = styled.div`
	width: 100%;
	height: 24.4rem;
	background-color: ${({ theme }) => theme.colors.skyblue};
`;

const Wrapper = styled.div`
	width: fit-content;
	margin: 0 auto;
`;

const UserWrapper = styled.div`
	text-align: center;
	padding: 2rem 0;
`;

const ImgWrapper = styled.div`
	width: 6rem;
	height: 6rem;
	border-radius: 70%;
	overflow: hidden;
	margin: 0 auto 1.2rem;
`;

const UserProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const UserName = styled.div`
	font-family: 'Pretendard';
	font-size: 1.6rem;
`;

const FolderName = styled.div`
	font-family: 'Pretendard';
	font-size: 4rem;
	font-weight: 600;
	text-align: center;
`;

function ProfileSection() {
	const [user, setUser] = useState<User | null>(null);

	const getUser = async () => {
		try {
			const res = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser().then((data) => {
			setUser(data);
		});
	}, []);
	// console.log(user);

	return (
		<Container>
			<Wrapper>
				<UserWrapper>
					<ImgWrapper>
						<UserProfileImg src={user?.profileImageSource} alt='profile-img' />
					</ImgWrapper>
					<UserName>{user?.name}</UserName>
				</UserWrapper>
				<FolderName>⭐️ 즐겨찾기</FolderName>
			</Wrapper>
		</Container>
	);
}

export default ProfileSection;
