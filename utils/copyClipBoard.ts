const handleLinkCopyClipBoard = async (link: string) => {
  console.log("test!");
  try {
    await navigator.clipboard.writeText(link);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};

export default handleLinkCopyClipBoard;
