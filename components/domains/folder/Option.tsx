import useModal from "@/lib/useModal";
import ModalPotal from "@/lib/Portal";
import styles from "./Option.module.css";
import Image from "next/image";

interface OptionButtonProps {
  onClick?: (folderId?: number) => void;
  icon: string;
  altText: string;
  text: string;
  folderId?: number;
}

function OptionButton({ onClick, icon, altText, text, folderId }: OptionButtonProps) {
  return (
    <button className={styles.optionButton} onClick={() => onClick && onClick(folderId)}>
      <Image src={icon} width={18} height={18} alt={altText} />
      <div className={styles.optionText}>{text}</div>
    </button>
  );
}

function Option({ folderName, folderId }: { folderName: string; folderId: any }) {
  const { Modal: ShareModal, openModal: openShareModal } = useModal();
  const { Modal: RenameModal, openModal: openRenameModal } = useModal();
  const { Modal: DeleteModal, openModal: openDeleteModal } = useModal();

  return (
    <div className={styles.option}>
      <OptionButton onClick={openShareModal} icon="/images/folder/share.png" altText="share icon" text="공유" />
      <ModalPotal>
        {ShareModal && <ShareModal title="폴더 공유" link={folderName} shareSNS folderId={folderId} />}
      </ModalPotal>

      <OptionButton onClick={openRenameModal} icon="/images/folder/pen.png" altText="rename icon" text="이름 변경" />
      <ModalPotal>
        {RenameModal && (
          <RenameModal
            title="폴더 이름 변경"
            input="폴더 이름"
            button="변경하기"
            color="blue"
            placeholder="폴더 이름을 입력해주세요."
          />
        )}
      </ModalPotal>

      <OptionButton onClick={openDeleteModal} icon="/images/folder/delete.png" altText="delete icon" text="삭제" />
      <ModalPotal>
        {DeleteModal && <DeleteModal title="폴더 삭제" link={folderName} button="삭제하기" color="red" />}
      </ModalPotal>
    </div>
  );
}

export default Option;
