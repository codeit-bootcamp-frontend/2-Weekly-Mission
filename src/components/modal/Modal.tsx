import styled, { css } from 'styled-components';
import closeModal from '../../assets/btn-close-modal.svg';
import kakao from '../../assets/ico-kakao-share.svg';
import facebook from '../../assets/ico-facebook-share.svg';
import link from '../../assets/ico-link-copy.svg';
import { shareKakao } from '../shareKakao';
import check from '../../assets/ico-check.svg';
import { useContext, useState } from 'react';
import modalContext from './modalContext';
import mainContext from '../main/mainContext';

const ModalContainer = styled.div<{ modalOpen: boolean }>`
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 36rem;
  padding: 3.2rem 4rem;
  border: 1px solid var(--gray20);
  border-radius: 1.5rem;
  z-index: 999;
  background-color: var(--white);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: var(--gray100);
`;

const Input = styled.input`
  width: 28rem;
  margin: 2.4rem 0 1.5rem 0;
  padding: 1.8rem 1.5rem;
  font-size: 1.6rem;
  outline: none;
  border: 1px solid var(--primary);
  border-radius: 0.8rem;
  color: var(--gray100);
`;

const Text = styled.p`
  margin: 0.8rem 0 2.4rem 0;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: var(--gray60);
`;

const Button = styled.button`
  border: none;
  width: 28rem;
  padding: 1.6rem 0;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: var(--white);
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  &.red {
    background: var(--red);
  }
`;

const CloseButton = styled.button`
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  border: none;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  width: 2.4rem;
  height: 2.4rem;
  background: url('${closeModal}') no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Dim = styled.div<{ modalOpen: boolean }>`
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--black-000);
  opacity: 0.4;
`;

const Sns = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 3.2rem;

  li {
    font-size: 1.3rem;
    cursor: pointer;

    img {
      display: block;
      margin: 0 0 1rem 0;
    }
  }
`;

const FolderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: 0 0 2.4rem 0;
`;

const selectedFolder = css`
  border-radius: 0.8rem;
  background-color: var(--bg);
`;

const Item = styled.li`
  position: relative;
  cursor: pointer;

  &:hover {
    ${selectedFolder}
  }

  & + & {
    margin: 1.1rem 0 0;
  }

  &.active {
    ${selectedFolder}

    p {
      color: var(--primary);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.4rem;
      height: 1.4rem;
      background: url('${check}') no-repeat;
    }
  }
`;

const Name = styled.p`
  display: inline-block;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: var(--gray100);
`;

const Count = styled.span`
  margin: 0 0 0 0.8rem;
  font-size: 1.4rem;
  color: var(--gray60);
`;

interface Folders {
  id: string;
  name: string;
}

interface FolderProps {
  folderList: Folders[];
  title: string;
}

async function clipBoard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert(text);
  } catch (error) {
    console.error(error);
  }
}

function shareFacebook({ title }: FolderProps, currentUrl) {
  const facebookUrl = encodeURIComponent(`${currentUrl}`);
  const facebookTitle = title;

  window.open(
    `http://www.facebook.com/sharer.php?u=${facebookUrl}&t=${facebookTitle}`,
    '',
    'width=400, height=400'
  );
}

function Folder({ folderList }: FolderProps) {
  const [selectedFolder, setSelectedFolder] = useState<string>('');

  const handleClickFolderList = (folder: string) => setSelectedFolder(folder);

  const item = folderList.map((folder) => (
    <Item
      key={folder?.id}
      onClick={() => handleClickFolderList(folder)}
      className={selectedFolder === folder ? 'active' : ''}
    >
      <Name>{folder?.name}</Name>
      <Count>{folder?.link?.count}개</Count>
    </Item>
  ));

  return item;
}

function Modal() {
  const { modalOpen, handleClickModalClose, type, cardUrl } = useContext(modalContext);
  const { title, folderList, selectedMenu } =
    useContext(mainContext);

  const host = window.location.href;
  let userId;
  if (folderList.length > 0) userId = folderList[0].user_id;
  const folderId = selectedMenu;
  const currentUrl = `${host}shared?user=${userId}&folderId=${folderId}`;

  function ModalType() {
    switch (type) {
      case 'share':
        return '폴더 공유';
      case 'edit':
        return '폴더 이름 변경';
      case 'folderRemove':
        return '폴더 삭제';
      case 'linkRemove':
        return '링크 삭제';
      case 'folderAdd':
        return '폴더에 추가';
      case 'folderListAdd':
        return '폴더 추가';
      default:
        return;
    }
  }

  function ButtonType() {
    switch (type) {
      case 'edit':
        return '변경하기';
      case 'folderRemove':
        return '삭제하기';
      case 'linkRemove':
        return '삭제하기';
      case 'folderAdd':
        return '추가하기';
      case 'folderListAdd':
        return '추가하기';
      default:
        return;
    }
  }

  return (
    <>
      <ModalContainer modalOpen={modalOpen}>
        <Title>
          <ModalType />
        </Title>
        {type === 'edit' || type === 'folderListAdd' ? (
          <Input type="text" placeholder="내용 입력" />
        ) : (
          <Text>
            {type === 'linkRemove' || type === 'folderAdd' ? cardUrl : title}
          </Text>
        )}
        {type === 'folderAdd' && (
          <FolderList>
            <Folder folderList={folderList} />
          </FolderList>
        )}
        {type !== 'share' ? (
          <Button
            type="button"
            className={
              type === 'folderRemove' || type === 'linkRemove' ? 'red' : ''
            }
          >
            <ButtonType />
          </Button>
        ) : (
          <Sns>
            <li>
              <img
                src={kakao}
                alt="카카오톡"
                onClick={() => shareKakao({ title }, currentUrl)}
              />
              카카오톡
            </li>
            <li>
              <img
                src={facebook}
                alt="페이스북"
                onClick={() => {
                  shareFacebook({ title }, currentUrl);
                }}
              />
              페이스북
            </li>
            <li>
              <img
                src={link}
                alt="링크 복사"
                onClick={() => clipBoard(currentUrl)}
              />
              링크 복사
            </li>
          </Sns>
        )}
        <CloseButton type="button" onClick={handleClickModalClose}>
          닫기
        </CloseButton>
      </ModalContainer>
      <Dim modalOpen={modalOpen}></Dim>
    </>
  );
}

export default Modal;
