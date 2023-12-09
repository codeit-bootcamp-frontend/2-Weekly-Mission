import FolderAllList from "./FolderListAll";

function FolderAll({ folderMenu }) {
  return folderMenu?.map((items) => <FolderAllList {...items} />);
}

export default FolderAll;
