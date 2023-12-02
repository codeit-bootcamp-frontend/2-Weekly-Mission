// 여기서 해야 할 일

// 받아와야 할 데이터: 유저 인포 / 폴더 인포

export function getFolder() {
  fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
