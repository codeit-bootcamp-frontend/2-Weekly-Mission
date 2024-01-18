import NavSection from "../NavSection.js";
import AddLink from "../AddLink.js";
import FolderBody from "../FolderBody.js";
import {} from "../../api.js";

function FolderPage() {
  return (
    <>
      <NavSection className="nav" value="folder" />
      <AddLink />
      <FolderBody />
    </>
  );
}

export default FolderPage;
