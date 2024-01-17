const BASE_URL = 'https://bootcamp-api.codeit.kr/';

//nav
export async function getData() {
  const response = await fetch(`${BASE_URL}api/users/1`);
  if (!response.ok) {
    throw new Error('유저 데이터를 불러오는데 실패했습니다');
  }
  const result = await response.json();
  console.log(result);
  const { data } = result;
  console.log(result);
  const body = data[0];
  console.log(body);
  return body;
}

//page-FolderPage/폴더목록에 필요한 데이터
export async function getFolderList() {
  const response = await fetch(`${BASE_URL}api/users/1/folders`);
  if (!response.ok) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다. ');
  }
  const result = await response.json();
  console.log(result);
  return result;
}

// 매개변수와 반환값의 타입을 명시
export async function getFolderChangeId(selectedId) {
  // API에서 받아올 데이터의 실제 타입
  console.log(selectedId);
  const query = selectedId === '' ? '' : `?folderId=${selectedId}`;
  const response = await fetch(`${BASE_URL}api/users/1/links${query}`);
  console.log(response);
  if (!response.ok) {
    throw new Error('폴더 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  console.log(body);
  Object.values(body);
  return body;
}

//shared 페이지
export const apiSettings = {
  endpoints: {
    profile: 'api/sample/user',
    folder: 'api/sample/folder',
    user: 'api/users/1',
    userFolders: 'api/users/1/folders',
    userLinks: 'api/users/1/links',
  },
  errorMessages: {
    profile: '유저 정보를 불러오는데 실패했습니다.',
    folder: '폴더를 불러오는데 실패했습니다.',
    user: '유저 정보를 불러오는데 실패했습니다.',
    userFolders: '유저 폴더를 불러오는데 실패했습니다.',
    userLinks: '유저 링크를 불러오는데 실패했습니다.',
  },
};

export async function getApiInfo(apiAdress, errorMessage, folderAdress = '') {
  const response = await fetch(`${BASE_URL}${apiAdress}${folderAdress}`);
  console.log(`${BASE_URL}${apiAdress}${folderAdress}`);
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  const body = await response.json();
  return body;
}
