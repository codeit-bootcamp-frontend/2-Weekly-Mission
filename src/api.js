// folder 안의 내용들을 리턴
// 리턴 예시: {id: 1, name: '⭐️ 즐겨찾기', owner: {…}, links: Array(9), count: 9}
export async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const data = await response.json();
  return data.folder;
}

// folder 객체를 파라미터로 받아 그 안의 links 배열을 리턴
/* export async function getLinks() {
  const folder = getFolder();
  console.log(folder.links);
}
 */
//아니 근데 굳이 이걸 또 함수화할 필요가 있을까?
//그냥 getFolder().links 해서 필요한 파일에 변수로 저장해놓으면 될 듯
