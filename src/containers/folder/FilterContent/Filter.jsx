import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import IconButton from 'components/common/Button/IconButton';
import MixButton from 'components/common/Button/MixButton';
import Modal from 'components/common/Modal';
import AddFolder from 'containers/folder/ModalContent/AddFolder';
import useModalState from 'hooks/useModalState';
import { ICON } from 'constants/importImg';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);
const { Addfilter } = ICON;

const Filter = ({ folderList, setFolderId, folderId, setTitle }) => {
  const router = useRouter();
  const { modalState, toggleModal } = useModalState(['addFolder']);
  const { reset } = useFormContext();

  const handleFilterClick = (id, name) => {
    setFolderId(id);
    setTitle(name);
    router.push(folderId ? `/folder/${folderId}` : '/folder');
  };

  const handleAddFolderModalClose = () => {
    toggleModal('addFolder');
    reset();
  };

  return (
    <>
      <div className={cx('filter')}>
        <ul className={cx('filter-list')}>
          <li className={cx('filter-list-item')}>
            <button
              type='button'
              className={cx('filter-outlined', 'filter-lg', {
                'is-active': folderId === undefined,
              })}
              onClick={() => handleFilterClick(undefined, '전체')}
            >
              <span className={cx('filter-lg-name')}>전체</span>
            </button>
          </li>

          {folderList?.map((item) => (
            <li
              key={item.id}
              className={cx('filter-list-item')}
              onClick={() => handleFilterClick(item.id, item.name)}
            >
              <button
                type='button'
                className={cx('filter-outlined', 'filter-lg', {
                  'is-active': folderId === item.id,
                })}
              >
                <span className={cx('filter-lg-name')}>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <IconButton
          label='폴더 추가 버튼'
          svg={Addfilter.lg.url}
          alt={Addfilter.lg.alt}
          iconSize={16}
          showMode='lg'
          onClick={() => toggleModal('addFolder')}
        />

        <MixButton
          text='폴더 추가'
          textSize={16}
          textColor={'#fff'}
          endIcon={Addfilter.sm.url}
          iconSize={16}
          alt={Addfilter.sm.alt}
          showMode='sm'
          fill={true}
          onClick={() => toggleModal('addFolder')}
        />
      </div>

      <Modal
        isModalOpen={modalState.addFolder}
        handleModalClose={handleAddFolderModalClose}
        modalTitle='폴더 추가'
        renderContent={
          <AddFolder
            toggleModal={toggleModal}
            handleModalClose={handleAddFolderModalClose}
          />
        }
      />
    </>
  );
};
export default Filter;
