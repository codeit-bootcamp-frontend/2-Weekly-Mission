import classNames from 'classnames/bind';
import styles from './LinkForm.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

// 링크 입력 폼 숨김 타입 선언
type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

// 링크 입력하는 폼 컴포넌트
export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부
  // getFolders
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null); // 선택된 폴더 아이디
  const [linkUrl, setLinkUrl] = useState<string>(''); // 링크 주소

  return <div className={cx('container')}></div>;
};
