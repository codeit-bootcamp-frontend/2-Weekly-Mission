import FolderAdd from "../modals/contents/FolderAdd";
import FolderEditName from "../modals/contents/FolderEditName";
import FolderDelete from "../modals/contents/FolderDelete";
import LinkDelete from "../modals/contents/LinkDelete";
import FolderShared from "../modals/contents/FolderShared";
import LinkAdd from "../modals/contents/LinkAdd";

export const modalContentsList = new Map([
  ["폴더 추가", FolderAdd],
  ["폴더 이름 변경", FolderEditName],
  ["폴더 삭제", FolderDelete],
  ["링크 삭제", LinkDelete],
  ["폴더 공유", FolderShared],
  ["폴더에 추가", LinkAdd]
]);
