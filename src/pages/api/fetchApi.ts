import API from 'constants/api';
import { SampleUser, SampleUserFolder, UserLinkItem, folderItem, linkItem } from 'constants/type';
import { UserInfo } from 'os';

const convertToSnakeCase = (links: UserLinkItem[]): linkItem[] => {
  const convertedLinks = links.map((link) => {
    return Object.fromEntries(
      Object.entries(link).map(([key, value]) => [key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`), value])
    ) as linkItem;
  });
  return convertedLinks;
};

export async function getSampleUserFolder() {
  const result = await fetch(API.SAMPLE_FOLDER);
  const { folder } = await result.json();
  const { links } = folder;
  folder.links = convertToSnakeCase(links);

  return folder as SampleUserFolder;
}

export async function getFolder() {
  const result = await fetch(API.USER_FOLDER);
  const { data } = await result.json();
  return data as folderItem[];
}

export async function getLinks(folderId: number) {
  const query = +folderId === 0 ? '' : `?folderId=${folderId}`; // 쿼리 없는 경우 전체 링크 불러오기
  const result = await fetch(`${API.USER_LINKS}${query}`);
  const { data } = await result.json();
  return data as linkItem[];
}

export async function getUser() {
  const result = await fetch(API.USER_INFO);
  const { data } = await result.json();
  return data as SampleUser[];
}

export async function isUsableEmail(emailToBeChecked: string) {
  const emailData = {
    email: emailToBeChecked,
  };

  const res = await fetch(API.CHECK_EMAIL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  const result = await res.json();
  const isUsable = !!result?.data;
  return isUsable;
}

// {
//   "error": {
//     "message": "이미 존재하는 이메일입니다."
//   }
// }

// {
//   "data": {
//     "isUsableNickname": true
//   }
// }

interface SignupParam {
  email: string;
  password: string;
}

export async function signup(userInfo: SignupParam) {
  try {
    const res = await fetch(API.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (res.status === 400) {
      const { error } = await res.json();
      throw new Error(error.message);
    }

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
}
