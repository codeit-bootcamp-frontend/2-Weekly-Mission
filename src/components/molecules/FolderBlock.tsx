import styled from 'styled-components';
import { FolderBlockProps } from '../../utils/interfaces';

const Container = styled.div<FolderBlockProps>`
  display: inline-block;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? ({ theme }) => theme.colors.purple : '#fff')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : ' #000')};
`;

function FolderBlock({ children, $isActive, onClickFolderBlock }: FolderBlockProps) {
  return (
    <Container $isActive={$isActive} onClick={onClickFolderBlock}>
      {children}
    </Container>
  );
}

export default FolderBlock;
