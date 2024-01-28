import React, { useEffect, useRef, useState } from 'react';
import link from '../../images/link.svg';
import '../Folder/CSS/Folder.css';
import Add from './Modal/Add';
import { ModalPortal } from '../../ModalPortal';

export default function FolderHeader() {
  const [links, setLinks] = useState<string>('');
  const [addModal, setAddModal] = useState<boolean>(false);

  const urlRegExp =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  const linksInputRef = useRef<HTMLInputElement>(null);

  const handleChangeLinks = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setLinks(e.target.value);
  };

  const handleLinksCreate = () => {
    if (links.length > 5 && urlRegExp.test(links)) {
      setAddModal(true);
      return;
    } else if (linksInputRef.current !== null) {
      linksInputRef.current.disabled = false;
      linksInputRef.current.focus();
      return;
    }
  };
  return (
    <>
      <form className="FolderHeaderContainer">
        <div className="FolderHeaderInputBox">
          <input
            type="url"
            className="FolderHeaderInput"
            placeholder="링크를 추가해 보세요"
            ref={linksInputRef}
            value={links}
            onChange={handleChangeLinks}
          />
        </div>
        <div className="FolderHeaderImg">
          <img src={link} alt="link" />
        </div>
        <button
          type="button"
          className="FolderHeaderBtn"
          onClick={handleLinksCreate}
        >
          추가하기
        </button>
      </form>
      {addModal && (
        <ModalPortal>
          <Add setAddModal={setAddModal} linksValue={links} />
        </ModalPortal>
      )}
    </>
  );
}
