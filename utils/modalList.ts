import FolderAddInputModal from "../components/commons/modals/FolderAddInputModal";
import FolderNameChangeModal from "../components/commons/modals/FolderNameInputModal";
import FolderDeleteModal from "../components/commons/modals/FolderDeleteModal";
import LinkDeleteModal from "../components/commons/modals/LinkDeleteModal";
import FolderSharedModal from "../components/commons/modals/FolderSharedModal";
import LinkAddModal from "../components/commons/modals/LinkAddModal";
import useModal from "../hook/useModal";

export const modals = new Map([
  ["폴더추가", FolderAddInputModal],
  ["이름 변경", FolderNameChangeModal],
  ["삭제", FolderDeleteModal],
  ["링크삭제", LinkDeleteModal],
  ["공유", FolderSharedModal],
  ["폴더에 추가", LinkAddModal],
]);
