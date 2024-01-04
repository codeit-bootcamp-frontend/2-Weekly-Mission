import React, { MouseEvent } from 'react';
import EditList from './EditList';
import addImg from '../../img/add.svg';
import '../../css/folderButtons.css';

interface Props {
  handleModal: (
    e: MouseEvent<HTMLElement> | MouseEvent<HTMLImageElement>
  ) => void;
  buttons: BtnProps[];
  littleTitle?: string | null;
  handleShowAll: (e: MouseEvent) => void;
  yourPick: (id?: number) => void;
}

interface BtnProps {
  id: number;
  name: string;
}

export default function SortButton({
  handleModal,
  handleShowAll,
  yourPick,
  littleTitle,
  buttons,
}: Props) {
  return (
    <>
      <section className="buttonLine">
        <ul className="list">
          <li>
            <button className="listUpButton " onClick={handleShowAll}>
              전체
            </button>
          </li>
          {buttons?.map((btn) => {
            return (
              <li key={btn.id}>
                <button
                  onClick={() => yourPick(btn.id)}
                  className={`listUpButton ${
                    littleTitle === btn.name ? 'clickButton' : ''
                  }`}
                >
                  {btn.name}
                </button>
              </li>
            );
          })}
        </ul>
        <img
          className="addButton"
          src={addImg}
          alt="링크 추가 버튼"
          id="addLink"
          onClick={handleModal}
        />
      </section>
      <section className="buttonLine">
        <h2 className="littleTitle">{littleTitle || '전체'}</h2>
        {littleTitle && <EditList handleModal={handleModal} />}
      </section>
    </>
  );
}
