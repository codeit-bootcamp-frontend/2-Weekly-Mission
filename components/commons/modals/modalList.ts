import FolderAddInputModal from "./FolderAddInputModal";
import FolderNameChangeModal from "./FolderNameInputModal";
import FolderDeleteModal from "./FolderDeleteModal";
import LinkDeleteModal from "./LinkDeleteModal";
import FolderSharedModal from "./FolderSharedModal";
import LinkAddModal from "./LinkAddModal";

export const modals = new Map([
  ["폴더추가", FolderAddInputModal],
  ["이름 변경", FolderNameChangeModal],
  ["삭제", FolderDeleteModal],
  ["링크삭제", LinkDeleteModal],
  ["공유", FolderSharedModal],
  ["폴더에 추가", LinkAddModal],
]);
